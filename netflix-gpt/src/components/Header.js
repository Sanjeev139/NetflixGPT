import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img
          className="w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>
        <div className="flex">
        {user && <img
            alt="userLogo"
            className="w-20 p-3"
            src={user?.photoURL}
          ></img>
        }
          </div>

           <div>
           {user &&
           <button
            className="p-4 bg-red-600 text-white rounded-lg m-4 cursor-pointer"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
