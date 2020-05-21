import axios from 'axios';
import { GET_POST } from './types';

export const fetchPost = () => async (dispatch) => {
  console.log(dispatch);

  await axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => {
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('Error', err);
    });
};
