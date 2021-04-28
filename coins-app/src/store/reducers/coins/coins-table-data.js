import { GET_COINS_TABLE_SUCCESS, GET_COINS_TABLE_FAILURE } from '../../actions/types/coins';

const coinsTableData = (state = [], action) => {
  switch (action && action.type) {
    case GET_COINS_TABLE_SUCCESS:
      return action.payload;

    case GET_COINS_TABLE_FAILURE:
      return state;

    default:
      return state;
  }
};

export default coinsTableData;