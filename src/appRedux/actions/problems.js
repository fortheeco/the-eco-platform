import { FETCH_PROBLEMS_COMMENT } from "../constants";
import api from "../../api/axios";

export const fetchProblems = (id) => {
  return (dispatch) => {
    const url = `https://theeco.pythonanywhere.com/api/problems/${id}/comments/`;
    api
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_PROBLEMS_COMMENT,
          payload: res.data,
        });
        // cb();
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROBLEMS_COMMENT,
          payload: { loading: false, message: error },
        });
      });
  };
};

export const fetchProblemsComment = (id) => {
  return (dispatch) => {
    // dispatch({
    //   type: FETCH_PROBLEMS_COMMENT,
    //   payload: { comments: [], loading: true },
    // });
    const url = `https://theeco.pythonanywhere.com/api/problems/${id}/comments/`;
    api
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_PROBLEMS_COMMENT,
          payload: res.data,
        });
        // cb();
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROBLEMS_COMMENT,
          payload: { loading: false, message: error },
        });
      });
  };
};
