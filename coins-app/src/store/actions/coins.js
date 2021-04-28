import { GET_COINS_TABLE, GET_COIN } from './types/coins';

const getCoinsTable = () => {
  return {
    type: GET_COINS_TABLE,
  };
};

const getCoin = (id) => {
  return {
    type: GET_COIN,
    payload: id,
  };
};

export { getCoinsTable, getCoin };