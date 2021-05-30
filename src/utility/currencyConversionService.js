import ReferenceData from './ReferenceData';

const { refArrForData, refArrForIndex, precisionArr, rateList } = ReferenceData;
const getRate = (refTableValue, from, to) => {
    switch (refTableValue) {
        case 'USD':
        case 'EUR':
            const interM = refTableValue;
            const fromIndex = refArrForIndex.indexOf(from);
            const toIndex = refArrForIndex.indexOf(to);
            const interMIndex = refArrForIndex.indexOf(interM);
            const refTableValue1 = refArrForData[fromIndex][interMIndex];
            const refTableValue2 = refArrForData[interMIndex][toIndex];
            return (
                getRate(refTableValue1, from, interM) *
                getRate(refTableValue2, interM, to)
            );
        case 'D':
            return rateList[from + to];
        case 'Inv':
            return 1 / rateList[to + from];
        case '1:1':
            return 1;
        default:
            return 1;
    }
};

export function convertCurrency (from, to, amount) {
    const fromIndex = refArrForIndex.indexOf(from);
    const toIndex = refArrForIndex.indexOf(to);
    const refTableValue = refArrForData[fromIndex][toIndex];

    let rate = getRate(refTableValue, from, to);
    let value = amount * rate;

    return value.toFixed(precisionArr[to]);
};

export function isRateAvaialable(currencyCode) {
    return refArrForIndex.indexOf(currencyCode.toUpperCase()) !== -1;
};