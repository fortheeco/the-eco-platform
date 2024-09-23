import { FETCH_PROJECTS_LIST, FETCH_PROJECTS_DETAILS } from "../constants";
import api from "../../api/axios";

export const fetchProjects = () => {
  return (dispatch) => {
    const url = `https://theeco.pythonanywhere.com/api/organisation/projects/`;
    api
      .get(url)
      .then((res) => {
        dispatch({
          type: FETCH_PROJECTS_LIST,
          payload: res.data,
        });
        // cb();
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROJECTS_LIST,
          payload: { loading: false, message: error },
        });
      });
  };
};

export const fetchprojectDetails = (id) => {
  return (dispatch) => {
    const url = `https://theeco.pythonanywhere.com/api/organisation/projects/${id}/`;
    api
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_PROJECTS_DETAILS,
          payload: res.data,
        });
        // cb();
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROJECTS_DETAILS,
          payload: { loading: false, message: error },
        });
      });
  };
};
