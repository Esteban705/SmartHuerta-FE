import React from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";


export const HttpContext = createContext();

export const HttpMethods = ({ children }) => {


  const [loading, setLoading] = useState(false)

  
   const post = async (url, body) => {
    try {
      setLoading(true)
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}${url}`,
        body
      );
      setLoading(false)
      return data;
    } catch (error) {
      setLoading(false)
      return error.response.data;
    }
  };


   const put = async (url, body) => {
    try {
      setLoading(true)
      const data = await axios.put(
        `${process.env.REACT_APP_BASE_URL}${url}`,
        body
      );
      setLoading(false)
      return data;
    } catch (error) {
      return error.response.data;
    }
  };
  
   const get = async (url) => {
    try {
      setLoading(true)
      const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}${url}`);
      setLoading(false)
      return data;
    } catch (error) {
      return error.response.data;
    }
  };



  return (
    <HttpContext.Provider value={{ post, get, put, loading, setLoading }}>
      {children}
    </HttpContext.Provider>
)}