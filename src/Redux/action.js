import axios from "axios";
import * as types from "./actionTypes";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  console.log(payload);
  return axios
    .post("http://localhost:8080/Users", payload)
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILURE, payload: e });
      return types.REGISTER_FAILURE;
    });
};

export const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("http://localhost:8080/Users", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
      return types.LOGIN_FAILURE;
    });
};


export const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};  

export const deleteFeedback = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/feedback/${id}`);
    dispatch({
      type: DELETE_FEEDBACK,
      payload: id
    });
  } catch (error) {
    console.error('Error deleting feedback:', error);
    throw error;
  }
};

export const updateFeedback = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/feedback/${id}`, updatedData);
    dispatch({
      type: UPDATE_FEEDBACK,
      payload: { id, updatedData: response.data }
    });
    return response.data; // Return the updated feedback if needed
  } catch (error) {
    console.error('Error updating feedback:', error);
    throw error;
  }
};

export const addFeedback = (feedbackData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/feedback`, feedbackData);
    dispatch({
      type: ADD_FEEDBACK,
      payload: response.data
    });
    return response.data; // Return the created feedback if needed
  } catch (error) {
    console.error('Error adding feedback:', error);
    throw error;
  }
};

export const getFeedbacks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/feedback`);
    dispatch({
      type: GET_FEEDBACKS,
      payload: response.data
    });
  } catch (error) {
    // You might want to dispatch an error action here as well
    console.error('Error fetching feedbacks:', error);
    throw error;
  }
};