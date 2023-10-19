import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import UseInputHook from "../Hooks/InputHook";
import InputField from "../Components/InputField";
import { AppContext } from "../Context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Firebase.config";

const Login = () => {
  const { user, loading, emailLogin } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  // console.log(user);

  //   toast for success
  const addedSuccessFully = () =>
    toast.success("logged in successfully!", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // toast for error login
  const errorlogin = () =>
    toast.warn("Username or password is incorrect!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // email login
  const handleSubmit = () => {
    console.log("submit click");
    console.log(emailInput.value);
    console.log(passwordInput.value);

    emailLogin(emailInput.value, passwordInput.value)
      .then((user) => {
        console.log(user);
        addedSuccessFully();

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, "1200");
      })
      .catch((error) => {
        console.log(error);
        errorlogin();
      });

    emailInput.reset();
    passwordInput.reset();
  };

  // google login
  const handleGoogleLogin = () => {
    console.log("google login click");
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((response) => {
        addedSuccessFully();

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, "1200");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" pt-[3.2rem] xsm:pt-[3.5rem] sm:pt-[3.7rem]  ">
      {/* <!-- component --> */}

      <div
        className=" py-4 relative mainContiner flex  w-full items-center justify-center bg-gray-900 bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url('https://i.ibb.co/LZKzL52/pexels-garrett-morrow-682933.jpg')`,
        }}
      >
        <div className="absolute w-full h-full opacity-20 top-0 left-0 bg-gray-500  "></div>

        <div className="  formContainer w-[85%] xsm:w-[65%] sm:w-[58%] md:w-[50%] xmd:w-[46%] lg:w-[39%] rounded-md bg-gray-200 bg-opacity-60  shadow-lg backdrop-blur px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 ">
          {/* form  */}

          {/* login body   */}
          <h1 className=" dancingFont w-full text-center block text-2xl sm:text-3xl font-semibold pb-2 sm:pb-3 md:pb-4 lg:pb-5 mb-2 sm:mb-3 md:mb-4 border-b border-gray-400 ">
            Login your account{" "}
          </h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}
          <InputField
            heading={"Email address"}
            inpType={"email"}
            placeHolder="Enter Email address"
            inputId="email_input"
            inputHook={emailInput}
          />
          <InputField
            heading={"Password"}
            inpType={"Password"}
            placeHolder="Enter password"
            inputId="password_input"
            inputHook={passwordInput}
          />

          {/* input component  */}

          <button
            className=" mt-5 bg-gray-600 hover:bg-gray-700 active:scale-[.99] py-2 w-full text-white "
            onClick={() => handleSubmit()}
          >
            Log in
          </button>

          <ToastContainer />

          {/* google sign  */}

          <p
            className=" robotoFont mt-3 cursor-pointer hover:underline flex items-center text-base xsm:text-lg sm:text-xl gap-2 "
            onClick={() => handleGoogleLogin()}
          >
            Sign in with
            <span className=" text-xl sm:text-2xl">
              <FcGoogle />
            </span>{" "}
          </p>
          {/* google sign  */}

          <p className="  mt-3 ">
            Dont’t Have An Account ?{" "}
            <span className="text-red-500">
              <Link to={`/register`}>Register</Link>
            </span>{" "}
          </p>
          {/* login body   */}

          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default Login;
