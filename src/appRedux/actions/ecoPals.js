import {
  FETCH_PALS,
  SEND_FOLLOW_REQ,
  FOLLOWING,
  FOLLOWERS,
  PENDING_FOLLOWERS,
} from "../constants";
import api from "../../api/axios";
import {
  openNotificationWithIcon,
  openNotificationWithIconErr,
} from "../../components/common/common";

export const fetchEcoPals = (id) => {
  return (dispatch) => {
    const url = `/pals`;
    api
      .get(url)
      .then((res) => {
        dispatch({
          type: FETCH_PALS,
          payload: res.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PALS,
          payload: { loading: false, message: error },
        });
      });
  };
};

export const fetchPalFollowing = () => {
  return (dispatch) => {
    const url = `/following/`;
    api
      .get(url)
      .then((res) => {
        dispatch({
          type: FOLLOWING,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FOLLOWING,
          payload: { loading: false, message: error },
        });
      });
  };
};

export const fetchPendingFollowing = () => {
  return (dispatch) => {
    const url = `/followers/pending/`;
    api
      .get(url)
      .then((res) => {
        dispatch({
          type: PENDING_FOLLOWERS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: PENDING_FOLLOWERS,
          payload: { loading: false, message: error },
        });
      });
  };
};

export const fetchPalFollowres = () => {
  return (dispatch) => {
    const url = `/followers/`;
    api
      .get(url)
      .then((res) => {
        dispatch({
          type: FOLLOWERS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FOLLOWERS,
          payload: { loading: false, message: error },
        });
      });
  };
};

export const acceptOrDeclinePalReq = (id, actionType) => {
  return (dispatch) => {
    const url = `/follow/${id}/${actionType}/`;

    api
      .post(url)
      .then((res) => {
        dispatch(fetchPendingFollowing());
        openNotificationWithIcon("Success", `${actionType}`, "success");
        dispatch(fetchPalFollowres());
        dispatch(fetchPalFollowing());
      })

      .catch((error) => {
        // dispatch({
        //   type: SEND_FOLLOW_REQ,
        //   payload: { loading: false, message: error },
        // });
        openNotificationWithIconErr("Error", "Followed", "error");
      });
  };
};

export const unFollowPal = (id) => {
  return (dispatch) => {
    const url = `/unfollow/${id}/`;

    api
      .delete(url)
      .then((res) => {
        dispatch(fetchPalFollowing());
        openNotificationWithIcon("Success", `Unfollow`, "success");
        dispatch(fetchPalFollowres());
        dispatch(fetchPendingFollowing());
      })

      .catch((error) => {
        // dispatch({
        //   type: SEND_FOLLOW_REQ,
        //   payload: { loading: false, message: error },
        // });
        openNotificationWithIconErr("Error", "Followed", "error");
      });
  };
};

export const followEcoPals = (id) => {
  return (dispatch) => {
    const url = `/follow/`;
    const data = {
      receiver: id,
    };
    api
      .post(url, data)
      .then((res) => {
        console.log("follow REquest", res);
        dispatch({
          type: SEND_FOLLOW_REQ,
          payload: res.data,
        });
        // cb();
        dispatch(fetchEcoPals());
        dispatch(fetchPalFollowing());
        openNotificationWithIcon("Success", "Followed", "success");
      })

      .catch((error) => {
        dispatch({
          type: SEND_FOLLOW_REQ,
          payload: { loading: false, message: error },
        });
        openNotificationWithIconErr("Error", "Followed", "error");
      });
  };
};
