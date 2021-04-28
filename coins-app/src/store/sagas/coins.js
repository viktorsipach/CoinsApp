import { takeEvery, put } from 'redux-saga/effects';
import { axiosDB } from '../../axios';
import {
  GET_COINS_TABLE,
  GET_COINS_TABLE_SUCCESS,
  GET_COINS_TABLE_FAILURE,
  GET_COIN,
  GET_COIN_SUCCESS,
  GET_COIN_FAILURE
} from '../actions/types/coins';

function* workerGetCoinsTable() {
  try {
    const result = yield axiosDB.get('assets');
    yield put({
      type: GET_COINS_TABLE_SUCCESS,
      payload: result.data.data,
    });
  } catch {
    yield put({
      type: GET_COINS_TABLE_FAILURE,
      payload: `ERROR! Cannot get coins list`,
    });
  }
}

function* workerGetCoin(action) {
    const id = action.payload
    try {
      const result = yield axiosDB.get(`assets/${id}`);
      yield put({
        type: GET_COIN_SUCCESS,
        payload: result.data.data,
      });
    } catch {
      yield put({
        type: GET_COIN_FAILURE,
        payload: `ERROR! Cannot get coin with id=${id}`,
      });
    }
  }

function* watchCoins() {
  yield takeEvery(GET_COINS_TABLE, workerGetCoinsTable);
  yield takeEvery(GET_COIN, workerGetCoin);
}

export default watchCoins;