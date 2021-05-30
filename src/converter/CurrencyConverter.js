import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import './CurrencyConverter.css';
import { convertCurrency, isRateAvaialable } from '../utility/currencyConversionService';

export default function CurrencyConverter() {
    const currencyPattern = new RegExp("^[A-Z,a-z]{3}$");

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);

    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const updateFromCurrency = event => setFromCurrency(event.target.value);
    const updateToCurrency = event => setToCurrency(event.target.value);
    const updateAmount = event => setAmount(event.target.value);

    const reset = () => {
        resetInput();
        resetInfo();
    }

    const resetInput = () => {
        setFromCurrency('');
        setToCurrency('');
        setAmount('');        
    };

    const resetInfo = () => {
        setConvertedAmount('');
        dispatch({ type: 'RESET' });
    }

    const convert = () => {
        resetInfo();
        if (!fromCurrency || !toCurrency || !amount) {
            dispatch({ type: 'MANDATORY_ERROR' });
        } else if (!currencyPattern.test(fromCurrency) || !currencyPattern.test(toCurrency)) {
            dispatch({ type: 'FORMMAT_ERROR' });
        } else if (!isRateAvaialable(fromCurrency) || !isRateAvaialable(toCurrency)) {
            dispatch({ type: 'RATE_ERROR', payLoad: { fromCurrency, toCurrency } });
        } else {
            setConvertedAmount(convertCurrency(fromCurrency.toUpperCase(), toCurrency.toUpperCase(), amount));
        }        
    };

    return (
        <div>
            <section className="App-header">

                <div className="roundCorner">
                    <div className="header">
                        Currency Converter
                  </div>
                    <div className="inputContainer">
                        <div className="inputRow">
                            <div className="label">From :</div>
                            <div className="inputAction"><input type="text" id="fromCurrency" onChange={updateFromCurrency} value={fromCurrency} maxLength="3" placeholder="eg. USD" title="Three letter currency code" /></div>
                            <div className="label">To :</div>
                            <div className="inputAction"><input type="text" id="toCurrency" onChange={updateToCurrency} value={toCurrency} maxLength="3" placeholder="eg. AUD" title="Three letter currency code" /></div>                            
                      </div>
                        <div className="inputRow">
                            <div className="label">Amount</div>
                            <div className="inputAction"><input type="number" id="amount" onChange={updateAmount} value={amount} placeholder="eg. 100.00" title="Amount to be converted" /></div>
                            <div className="buttonContainer"><button className="button" onClick={convert}>Convert</button></div>
                            <div className="buttonContainer"><button className="button" onClick={reset}>Reset</button></div>
                      </div>
                  </div>
                    {convertedAmount &&
                        <div className="result">
                            Converted Amount : {convertedAmount}
                        </div>
                    }
                    {error &&
                        <div className="error">
                            {error}
                        </div>
                    }

                </div>
            </section>
        </div>
    );
}
