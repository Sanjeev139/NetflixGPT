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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            photoURL: "https://avatars.githubusercontent.com/u/50225347?v=4",
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
              navigate("/browse");
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
        navigate("/browse");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ":" + errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  // const SignUp = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
  //       const user = userCredentials.user;
  //       updateProfile(user, {
  //         displayName: name.current.value,
  //         photoURL: "https://avatars.githubusercontent.com/u/50225347?v=4"
  //       }).then(() => {
  //         const {uid, email, displayName, photoURL} = auth.currentUser();
  //         dispatch(addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL
  //         }));
  //         navigate("/browse")
  //       }).catch((error) => {
  //         setErrorMessage(error.message)
  //       });
  //   }).catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode + ":" + errorMessage);
  //       setErrorMessage(errorMessage)
  //   });
  // }

  // const updateUserProfile = (user) => {
  //   updateProfile(user, {
  //     displayName: name.current.value,
  //     photoURL: "https://avatars.githubusercontent.com/u/50225347?v=4"
  //   }).then(() => {
  //     const {uid, email, displayName, photoURL} = auth.currentUser();
  //     dispatch(addUser({
  //       uid: uid,
  //       email: email,
  //       displayName: displayName,
  //       photoURL: photoURL
  //     }));
  //     navigate("/browse")
  //   }).catch((error) => {
  //     setErrorMessage(error.message)
  //   });
  // }

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
