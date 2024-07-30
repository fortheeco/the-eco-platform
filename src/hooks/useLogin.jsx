import Cookies from "js-cookie";
// import { jwtDecode } from 'jwt-decode'
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/your-Eco";
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function signin(email, password) {
    const data = {
      email,
      password,
    };
    setIsPending(true);
    setError(null);

    try {
      const response = await axios.post("login/", data);
      const { user, token } = await response?.data;
      dispatch({
        type: "LOGIN",
        user,
        token,
      });
      //   console.log(user, token);
      // let decoded = jwtDecode(token)
      Cookies.set("token", token, { expires: 7 });
      //   localStorage.setItem("user", JSON.stringify(response.data.user));
      // document.cookie('token', response.data.token)
      setError(null);
      setIsPending(false);
      if (user.skills.length === 0) {
        navigate("/signup/user/skillset", { replace: true });
      } else {
        navigate("/your-Eco", { replace: true });
      }
    } catch (err) {
      console.error(err);
      // check if error is due to invalid credentials, else it's a network error
      let logErr = err?.response?.data?.non_field_errors[0] || err.message;
      setError(logErr);
      setIsPending(false);
    }
  }

  return { signin, error, isPending };
}
