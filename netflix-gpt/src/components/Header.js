import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearchBar } from "../utils/searchSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { changeLanguage } from "../utils/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const user = useSelector((store) => store.user);
  const toggleSearch = useSelector(store => store.search.toggleSearch);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispacth(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispacth(removeUser());
        navigate("/");
      }
    });
  }, []);

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

  const hadnleSearchButton = () => {
    dispacth(toggleSearchBar(!toggleSearch))
  }

  const handleChangeLanguage = (e) => {
    dispacth(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && 
      <div className="flex p-2">
        { toggleSearch && (<select className="p-4 m-4" onChange={handleChangeLanguage}>
          {
            SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
          }
        </select>)
        }
        <button className="bg-red-600 text-white rounded-lg p-4 m-4 cursor-pointer" onClick={hadnleSearchButton}>{toggleSearch ? "Home Page" : "Search Movies"}</button>
        <img
          alt="userLogo"
          className="w-20 p-3 text-red-700 flex justify-between"
          src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"
        ></img>
        <button
          className="p-4 bg-red-600 text-white rounded-lg m-4 cursor-pointer"
          onClick={userSignOut}
        >
          Sign Out
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
