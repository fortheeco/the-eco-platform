import { GET_USER } from "../constants";
import api from "../../api/axios";

export const fetchUserData = (id) => {
  // const userD = useSelector(state => state.auth?.userData);
  return (dispatch) => {
    dispatch({
      type: GET_USER,
      payload: { userD: "", loading: true },
    });
    const url = `/edit-profile/`;
    api
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
        // cb();
      })
      .catch((error) => {
        dispatch({
          type: GET_USER,
          payload: { loading: false, message: error },
        });
      });
  };
};
