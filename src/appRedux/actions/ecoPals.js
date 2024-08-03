import { FETCH_PALS } from "../constants";
import api from "../../api/axios";

export const fetchEcoPals = (id) => {
  return (dispatch) => {
    const url = `/pals`;
    api
      .get(url)
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_PALS,
          payload: res.data.results,
        });
        // cb();
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PALS,
          payload: { loading: false, message: error },
        });
      });
  };
};
