import { cartActions } from './cart';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Dispatch } from 'react';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await axios.get(
        'http://localhost:5000/api/v1/carts/63ad5269f178aa8b87b91d7a'
      );
      return res.data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      // Send state as Sending request

      const res = await axios.put(
        'http://localhost:5000/api/v1/carts/63ad5269f178aa8b87b91d7a',
        cart
      );
      return res.data;
      // Send state as Request is successful
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
