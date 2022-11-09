import { fetchImagesList } from './images.Gateway';

export const IMAGES_RECEIVED = 'IMAGES_RECEIVED';

export const imagesReceived = imagesList => ({
  type: IMAGES_RECEIVED,
  payload: imagesList,
});

export const getImagesList = () => {
  const thunkAction = dispatch => {
    fetchImagesList().then(imagesList => dispatch(imagesReceived(imagesList)));
  };
  return thunkAction;
};
