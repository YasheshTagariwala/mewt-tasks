import {GET_COINS_LIST, GET_COINS_LIST_ERROR, GET_COINS_LIST_SUCCESS} from '../actions';

export const getCoinsList = () => ({
    type: GET_COINS_LIST
});
export const getCoinsListSuccess = (coinsData) => ({
    type: GET_COINS_LIST_SUCCESS,
    payload: coinsData
});
export const getCoinsListError = (err) => ({
    type: GET_COINS_LIST_ERROR,
    message: err
});
