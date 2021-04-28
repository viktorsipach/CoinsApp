import { combineReducers } from 'redux';
import coinsTableData from './coins/coins-table-data';
import coinData from './coins/coin-data'

const rootReducer = combineReducers({
  coinsTableData,
  coinData
});

export default rootReducer;