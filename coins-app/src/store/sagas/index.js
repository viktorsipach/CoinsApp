import { all } from 'redux-saga/effects';
import watchCoins from './coins';

export default function* rootSaga() {
  yield all([
    watchCoins(),
  ]);
}