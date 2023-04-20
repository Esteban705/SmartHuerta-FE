import React, { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import UserPerfil from "./UserPerfil";
import { ArticleContext } from "../Context/articleContext";

export const UserPerfilPage = () => {
  
  const { getAllProducts } = useContext(ArticleContext);

  return (
    <UserPerfil
      getAllProducts={getAllProducts}
    />
  );
};
