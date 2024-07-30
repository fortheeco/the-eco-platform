import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../api/axios";
import { validateForm } from "../../../helpers/validate-form";
import SplitLayout from "../SplitLayout";

const initialState = {
  full_name: "",
  email: "",
  gender: "custom",
  password: "",
};

export default function Individual() {
  const [showPswd, setShowPswd] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear previous error for current input
    setFormError((prev) => ({ ...prev, [name]: null }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      setIsPending(true);
      setError(null);
      await api
        .post(
          "signup/",
          { email: formData.email },
          {
            headers: { "Content-Type": "application/json" },
            // withCredentials: true,
          }
        )
        .then((response) => {
          setIsPending(false);
          setError(null);
          setIsSuccess(true);
          setTimeout(() => {
            navigate("/signup/verify-email", {
              state: { formData, id: response.data?.message_id },
              replace: true,
            });
          }, 2000);
        })
        .catch((err) => {
          let logErr =
            err?.response.data.error ||
            "Oops... Something went wrong! Please try again";
          toast.error(logErr);
          setIsPending(false);
          setIsSuccess(false);
          setError(logErr);
        });
    }
    return;
  }

  return (
    <SplitLayout>
      <article className="w-full">
        <div className="w-full flex justify-between items-center mb-20">
          <p>Awesome!!, Account type set 👍🏿</p>
          <Link
            to={"/signup"}
            className="text-ecoGreen capitalize font-semibold"
          >
            go back
          </Link>
        </div>
        <h4 className="text-2xl underline text-center my-6 block lg:text-3xl">
          Create an Account for free
        </h4>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <label className="block w-full">
            <span className="text-lg capitalize">full name</span>

            <input
              type="text"
              disabled={isPending || isSuccess}
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`mt-3 gap-3 h-10 rounded-md relative input-parent transition-all bg-nav/10 inline-block outline-0 w-full border-0 focus-within:border-b-2 focus-within:border-ecoGreen p-4 duration-200 ${
                formError.full_name ? "border-2 border-red" : ""
              }`}
            />
            {formError.full_name && (
              <small className="text-base text-rose-500 mt-2 inline-block">
                {formError.full_name}
              </small>
            )}
          </label>
          <label className="block w-full">
            <span className="text-lg capitalize">Gender</span>
            <div className="flex mt-3 p-2 gap-3 bg-nav/10 rounded-md input-parent transition-all duration-200">
              <select
                disabled={isPending || isSuccess}
                value={formData.gender}
                name="gender"
                onChange={handleChange}
                className="bg-transparent outline-0 border-0 capitalize w-full pr-2"
              >
                <option value="custom">custom</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </label>

          <label className="block w-full">
            <span className="text-lg capitalize">email address</span>
            <input
              type="email"
              disabled={isPending || isSuccess}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`mt-3 gap-3 h-10 rounded-md relative input-parent transition-all bg-nav/10 inline-block outline-0 w-full border-0 focus-within:border-b-2 focus-within:border-ecoGreen p-4 duration-200 ${
                formError.email ? "border-2 border-red" : ""
              }`}
            />
            {formError.email && (
              <small className="text-base text-rose-500 mt-2 inline-block">
                {formError.email}
              </small>
            )}
          </label>

          <label className="block w-full">
            <span className="text-lg capitalize">password</span>
            <div
              className={`flex mt-3 gap-3 rounded-md relative input-parent bg-nav/10 transition-all duration-200 ${
                formError.password ? "input-error" : ""
              }`}
            >
              <input
                type={showPswd ? "text" : "password"}
                disabled={isPending || isSuccess}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="*******"
                className="h-10 rounded-md inline-block outline-0 w-full border-0 bg-transparent px-4"
              />
              <div
                className="flex w-10 items-center justify-center text-2xl"
                onClick={() => setShowPswd((pswd) => !pswd)}
              >
                {showPswd ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </div>
            </div>
            {formError.password && (
              <small className="text-base text-rose-500 mt-2 inline-block">
                {formError.password}
              </small>
            )}
          </label>

          <button
            type="submit"
            disabled={isPending || isSuccess}
            className="capitalize bg-ecoGreen text-white w-fit mt-20 py-3 px-16 rounded-full text-lg font-semibold mx-auto disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
          >
            {isPending ? "loading..." : "create account"}
          </button>
          {error && (
            <small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full mt-2">
              {error}
            </small>
          )}
          {isSuccess && (
            <small className="text-center text-ecoGreen font-nunito text-lg font-semibold inline-block w-full mt-2">
              Congratulations! Please verify your email to proceed to the next
              step
            </small>
          )}
          <p className="my-4 text-lg text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="capitalize lg:font-semibold text-ecoGreen focus-within:font-bold focus-within:outline-0 focus-within:underline transition-all"
            >
              Login to your portal
            </Link>
          </p>
        </form>
      </article>
    </SplitLayout>
  );
}
