import {GET_COINS_LIST, GET_COINS_LIST_ERROR, GET_COINS_LIST_SUCCESS} from '../actions';

const INIT_STATE = {
    coins: [],
    loading: false,
    error: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_COINS_LIST:
            return {...state, coins: [], loading: true, error: ''};
        case GET_COINS_LIST_SUCCESS:
            return {...state, coins: action.payload, loading: false, error: ''};
        case GET_COINS_LIST_ERROR:
            return {...state, coins: [], loading: false, error: action.message};
        default:
            return {...state};
    }
};
