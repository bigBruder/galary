import { IMAGES_RECEIVED } from './images.actions';
const initialState = {
  images: [],
};
const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_RECEIVED: {
      return {
        images: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currenciesReducer;
