import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {GET_COINS_LIST} from "../actions";
import {getCoinsListSuccess, getCoinsListError} from "./actions";
import ApiService from "../../untils/api-service";

export function* watchGetCoinsList() {
    yield takeEvery(GET_COINS_LIST, getCoinsList);
}

const getCoinsListAsync = async () => {
    let params = {
        vs_currency: 'USD',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false
    }
    return await ApiService.callGet('https://api.coingecko.com/api/v3/coins/markets', params);
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* getCoinsList() {
    try {
        yield sleep(2000);
        const coinsData = yield call(getCoinsListAsync);
        yield put(getCoinsListSuccess(coinsData));
    } catch (error) {
        let err = error.response ? error.response.data.message : error.message
        yield put(getCoinsListError(err));

    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetCoinsList)
    ]);
}
