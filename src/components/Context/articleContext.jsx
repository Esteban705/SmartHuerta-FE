import React from "react";
import { useContext } from "react";
import { HttpContext } from "./httpContext";

export const ArticleContext = React.createContext();

export const ArticleMethods = ({ children }) => {
  const { post, get, put } = useContext(HttpContext);

  const getAllProducts = async (productId) => {
    try {
      const getAllProducts = await get(`/api/product/allproducts/${productId}`);
      return getAllProducts;
    } catch (error) {
      return error;
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const getAllProducts = await put(`/api/product/delete/${productId}`);
      return getAllProducts;
    } catch (error) {
      return error;
    }
  };

  return (
    <ArticleContext.Provider value={{ getAllProducts, handleDeleteProduct }}>
      {children}
    </ArticleContext.Provider>
  );
};
