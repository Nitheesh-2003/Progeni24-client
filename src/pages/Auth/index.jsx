import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "@actions/AuthAction";
import { Alert } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "@assets/progeni.png";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialValue);
  const [confirmPass, setConfirmPass] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (data.password === data.confirmPassword) {
        const success = await dispatch(signUp(data));
        if (success) {
          toast.success("Sign up successful!");
        } else {
          toast.error("Sign up failed. Check credentials and try again.");
        }
      } else {
        setConfirmPass(true);
        toast.error("Passwords do not match.");
      }
    } else {
        if (data.password === data.confirmPassword) {
            const success = await dispatch(login(data));
            if (success) {
                toast.success("Login successful!");
            } else {
                toast.error("Login failed. Please check your credentials and try again.");
            }
          } else {
            setConfirmPass(true);
            toast.error("Passwords do not match.");
          }
    }
  };

  const resetForm = () => {
    setConfirmPass(false);
    setData(initialValue);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:min-h-[100vh] min-h-[120vh] gap-8 lg:flex-row bg-primary">
      <ToastContainer /> {/* Add this component to render toast notifications */}
      <div className="flex sm:gap-4 gap-1 items-center">
        <img src={logo} className="sm:w-36 w-28 sm:h-36 h-28" alt="" />
        <div className="flex flex-col gap-4">
            <div className="sm:text-5xl text-3xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#804dee] to-[#ffffff]">
              Progeni <span className="progeni">24.0</span>
            </div>
          <div className="font-bold sm:text-sm text-xs">
            Pro-generate on March 11,2024..
          </div>
        </div>
      </div>
      <div className="bg-black-100 rounded-xl p-4">
        <form
          autoComplete="off"
          className="flex flex-col gap-4 justify-center items-center sm:w-fit xs:w-80 w-72"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl">
            <b>{isSignUp ? "Sign Up" : "Log In"}</b>
          </h3>
          {isSignUp ? (
            <div className="flex sm:flex-row flex-col w-full gap-2">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="bg-tertiary  py-5 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="bg-tertiary py-5 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          ) : null}
          <div className="w-full">
            <input
              type="text"
              placeholder="Email ID"
              name="email"
              className="bg-tertiary py-5 px-4 w-full placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="flex gap-2 sm:flex-row flex-col w-full">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="bg-tertiary py-5 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              value={data.password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className="bg-tertiary py-5 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
              value={data.confirmPassword}
            />
          </div>
          <div className="w-full">
            {confirmPass ? (
              <Alert severity="error" className="w-full">
                Check your password
              </Alert>
            ) : null}
          </div>
          <div
            className="text-[12px] cursor-pointer hover:underline hover:text-secondary"
            onClick={() => {
              setIsSignUp(!isSignUp);
              resetForm();
            }}
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </div>
          <button type="submit" className="btn rounded-md text-white px-7 py-3">
            {loading ? "Loading" : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
