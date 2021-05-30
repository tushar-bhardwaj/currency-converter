import { convertCurrency, isRateAvaialable } from '../utility/currencyConversionService';

test('convertCurrency AUD-USD', () => {
    const value = convertCurrency('AUD','USD','100.00');
    expect(value).toBe("83.71");
});

test('convertCurrency AUD-AUD', () => {
    const value = convertCurrency('AUD', 'AUD', '100.00');
    expect(value).toBe("100.00");
});

test('convertCurrency AUD-DKK', () => {
    const value = convertCurrency('AUD', 'DKK', '100.00');
    expect(value).toBe("505.76");
});

test('convertCurrency JPY-USD', () => {
    const value = convertCurrency('JPY', 'USD', '100.00');
    expect(value).toBe("0.83");
});


test('isRateAvaialable invalid', () => {
    const value = isRateAvaialable('INR');
    expect(value).toBe(false);
});


test('isRateAvaialable valid', () => {
    const value = isRateAvaialable('AUD');
    expect(value).toBe(true);
});