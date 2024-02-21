import React, { useRef, useState } from "react";
import Header from "./Header";
import validateForm from "../utils/validateForm";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE_URL } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButton = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser();
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ":" + errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      SignIn(email.current.value, password.current.value);
    }
  };

  const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ":" + errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src={BG_IMAGE_URL}
          alt="cover-page"
        ></img>
      </div>
      <form
        className="p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="py-5 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="w-full p-5 my-4 bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="w-full p-5 my-4 bg-gray-700"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-full p-5 my-4 bg-gray-700"
        ></input>
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button
          className="bg-red-700 rounded-lg w-full p-4 my-6"
          onClick={handleButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignIn} className="cursor-pointer">
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Already Register ? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
