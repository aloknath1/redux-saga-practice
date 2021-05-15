const initialState = {
    loading: false,
    data: [],
    errors: null
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'API_RESPONSE_CALL':
            return {
                ...state,
                loading:false
            }

        case 'API_RESPONSE_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case 'API_RESPONSE_FAIL':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
};

export default reducer;