import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";

import UseInputHook from "../Hooks/InputHook";
import InputField from "../Components/InputField";

import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import { AppContext } from "../Context/AuthContext";

const Register = () => {
  const { registerEmail, logOut } = useContext(AppContext);

  const navigate = useNavigate();

  const nameInput = UseInputHook();
  const imageInput = UseInputHook();
  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  const [isChecked, setIsChecked] = useState(false);

  // logout function
  const handleLogout = () => {
    logOut()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // toast for success fully register
  const registerSuccessfully = () =>
    toast.success("Register successfully!", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // toast for term and condition error
  const termError = () =>
    toast.error("Select terms and conditions", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // toast for empty input field
  const inputFieldError = () =>
    toast.error("All fields are required", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // toast for password validation
  const passwordValidationError = () =>
    toast.error(
      "Password should be at least 6 characters long, contain a capital letter, and a special character",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

  // function for handling check box state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Function to validate the password
  const isPasswordValid = (password) => {
    const minLength = 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
      password
    );

    return (
      password.length >= minLength && hasCapitalLetter && hasSpecialCharacter
    );
  };

  // registration function
  const handleRegister = () => {
    console.log("register click");

    // Check any input fields are empty
    if (
      !nameInput.value.trim() ||
      !imageInput.value.trim() ||
      !emailInput.value.trim() ||
      !passwordInput.value.trim()
    ) {
      return inputFieldError();
    } else if (!isChecked) {
      return termError();
    } else if (!isPasswordValid(passwordInput.value)) {
      return passwordValidationError();
    }

    registerEmail(emailInput.value, passwordInput.value)
      .then((result) => {
        const displayName = nameInput.value;
        const photoURL = imageInput.value;

        updateProfile(result.user, { displayName, photoURL })
          .then((user) => {
            console.log("User profile updated successfully:", user);

            registerSuccessfully();
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
        handleLogout();

        navigate(`/login`);
      })
      .catch((error) => {
        const errormsg = error.message;
        console.log(errormsg);

        toast.warn(`${errormsg}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });

    // nameInput.reset();
    // imageInput.reset();
    // emailInput.reset();
    // passwordInput.reset();

    //
  };

  return (
    <div className="  pt-[3.2rem] xsm:pt-[3.5rem] sm:pt-[3.7rem] ">
      {/* <!-- component --> */}

      <div
        className=" py-4 relative mainContiner flex  w-full items-center justify-center bg-gray-900 bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url('https://i.ibb.co/5Mmn4Jf/pexels-pixabay-270640.jpg')`,
        }}
      >
        <div className="absolute w-full h-full opacity-20 top-0 left-0 bg-gray-800  "></div>

        <div className="  formContainer w-[82%] xsm:w-[72%] sm:w-[64%] md:w-[52%] xmd:w-[49%] lg:w-[44%] rounded-md bg-gray-200 bg-opacity-60  shadow-lg backdrop-blur px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 ">
          {/* form  */}

          {/* register body  body   */}

          <h1 className=" dancingFont w-full text-center block text-2xl sm:text-3xl font-semibold pb-2 sm:pb-3 md:pb-4 lg:pb-5 mb-2 sm:mb-3 md:mb-4 border-b border-gray-400 ">
            Register your account
          </h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}
          <InputField
            heading={"Your Name"}
            inpType={"text"}
            placeHolder="Enter your name"
            inputId="name_input"
            inputHook={nameInput}
          />
          <InputField
            heading={"Photo Url"}
            inpType={"text"}
            placeHolder="Enter photo url"
            inputId="photo_input"
            inputHook={imageInput}
          />
          <InputField
            heading={"Email"}
            inpType={"email"}
            placeHolder="Enter your email"
            inputId="email_input"
            inputHook={emailInput}
          />
          <InputField
            heading={"Password"}
            inpType={"password"}
            placeHolder="Enter your email"
            inputId="password_input"
            inputHook={passwordInput}
          />

          <div className="flex items-start mt-3  w-full ">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-800 "
            >
              I agree with the{" "}
              <Link className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </Link>
              .
            </label>
          </div>

          {/* input component  */}

          <button
            className=" mt-5 bg-gray-600 hover:bg-gray-700 active:scale-[.99] py-2 w-full text-white "
            onClick={() => handleRegister()}
          >
            Register
          </button>

          <p className="  mt-3 ">
            Already have An Account ?
            <span className="text-red-500">
              <Link to={`/login`}>Log in</Link>
            </span>{" "}
          </p>

          {/* register  body   */}

          {/* form  */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
