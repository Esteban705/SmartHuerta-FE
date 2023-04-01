import React, { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import UserPerfil from "./UserPerfil";

export const UserPerfilPage = () => {
  const { get, put } = useContext(HttpContext);

  const getAllProducts = async (productId) => {
    const getAllProducts = await get(`/api/product/allproducts/${productId}`);

    return getAllProducts;
  };

  const handleDeleteProduct = async (productId) => {
    const getAllProducts = await put(`/api/product/delete/${productId}`);

    return getAllProducts;
  };

  return (
    <UserPerfil
      getAllProducts={getAllProducts}
      handleDelete={handleDeleteProduct}
    />
  );
};
