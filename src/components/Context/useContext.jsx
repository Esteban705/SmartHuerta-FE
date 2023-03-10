import React, { useContext } from "react";
import { HttpContext } from "./httpContext";
/* import { useState, createContext } from "react"; */

export const UserContext = React.createContext();

export const UserMethods = ({ children }) => {
  const { get } = useContext(HttpContext);
  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const dataUser = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data;
  };

  const [location, setLocation] = React.useState();

  const changeUserNew = (isNew) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const changeUser = {
      ...userData,
      isNew: isNew,
    };
    localStorage.setItem("user", JSON.stringify(changeUser));
  };

  const getUserData = async (idUser) => {
    try {
      const getDataOfUser = await get(`/api/auth/${idUser}`);
      // console.log(getDataOfUser)
      return getDataOfUser;
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <UserContext.Provider
      value={{
        saveUser,
        dataUser,
        changeUserNew,
        location,
        setLocation,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
