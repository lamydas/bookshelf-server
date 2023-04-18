import api from "../../utils/api";
import { setAlert } from "./alertAction";
import {
  GET_BOOKS,
  NO_MARCHED
} from "../types";


// Get GOOGLE BOOK API books
export const getBooks = (search,navigate) => async (dispatch) => {
  try {
    const res = await api.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`);

    dispatch({
      type: GET_BOOKS,
      payload: res.data.items,
    });

    dispatch(setAlert('Search Request sent', 'success'));

    navigate('/Products');


  } catch (err) {
    dispatch({
      type: NO_MARCHED,
    });
  }
};


