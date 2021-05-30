const refArrForIndex = [
    'AUD',
    'CAD',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GPB',
    'JPY',
    'NOK',
    'NZD',
    'USD'
];
const precisionArr = {
    AUD: 2,
    CAD: 2,
    CNY: 2,
    CZK: 2,
    DKK: 2,
    EUR: 2,
    GPB: 2,
    JPY: 0,
    NOK: 2,
    NZD: 2,
    USD: 2
};
const rateList = {
    AUDUSD: '0.8371',
    CADUSD: '0.8711',
    USDCNY: '6.1715',
    EURUSD: '1.2315',
    GBPUSD: '1.5683',
    NZDUSD: '0.7750',
    USDJPY: '119.95',
    EURCZK: '27.6028',
    EURDKK: '7.4405',
    EURNOK: '8.6651'
};
const refArrForData = [
    ['1:1', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'D'],
    ['USD', '1:1', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'D'],
    ['USD', 'USD', '1:1', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'D'],
    [
        'USD',
        'USD',
        'USD',
        '1:1',
        'EUR',
        'Inv',
        'USD',
        'USD',
        'EUR',
        'USD',
        'EUR'
    ],
    [
        'USD',
        'USD',
        'USD',
        'EUR',
        '1:1',
        'Inv',
        'USD',
        'USD',
        'EUR',
        'USD',
        'EUR'
    ],
    ['USD', 'USD', 'USD', 'D', 'D', '1:1', 'USD', 'USD', 'D', 'USD', 'D'],
    ['USD', 'USD', 'USD', 'USD', 'USD', 'USD', '1:1', 'USD', 'USD', 'USD', 'D'],
    [
        'USD',
        'USD',
        'USD',
        'USD',
        'USD',
        'USD',
        'USD',
        '1:1',
        'USD',
        'USD',
        'Inv'
    ],
    [
        'USD',
        'USD',
        'USD',
        'EUR',
        'EUR',
        'Inv',
        'USD',
        'USD',
        '1:1',
        'USD',
        'EUR'
    ],
    ['USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', 'USD', '1:1', 'D'],
    ['Inv', 'Inv', 'Inv', 'EUR', 'EUR', 'Inv', 'Inv', 'D', 'EUR', 'Inv', '1:1']
];


export default {
    refArrForData,
    refArrForIndex,
    precisionArr,
    rateList
};

