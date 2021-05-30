const initialState = {
    error: ''
};


function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'FORMMAT_ERROR':
            return { error: 'Invalid Currency Code Entered !!' };
        case 'MANDATORY_ERROR':
            return { error: 'Kindly provide values for all fields!!' };
        case 'RATE_ERROR':
            return { error: `Rate not avaialabe for ${action.payLoad.fromCurrency.toUpperCase()}${action.payLoad.toCurrency.toUpperCase()} !!` };
        case 'RESET':
            return { error: '' };
        default:
            return state;
    }
}

export default rootReducer;