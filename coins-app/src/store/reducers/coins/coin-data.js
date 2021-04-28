import { GET_COIN_SUCCESS, GET_COIN_FAILURE } from '../../actions/types/coins';

const coinData = (state = [], action) => {
  switch (action && action.type) {
    case GET_COIN_SUCCESS:
      return action.payload;

    case GET_COIN_FAILURE:
      return state;

    default:
      return state;
  }
};

export default coinData;