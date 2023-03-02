import { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import { ArticuloView } from "./Views/ArticuloView";

export const ArticuloPage = ({ open, handleClosetModalArticle }) => {
  const { get, post } = useContext(HttpContext);

  const hanldeSubmitForm = async (values, dataImg) => {
    const categoriesId = values.categories.map((dataCategories) => {
      return dataCategories._id;
    });
    const homesId = values.home.map((dataHome) => {
      return dataHome._id;
    });

    const prepareDataToProduct = {
      ...values,
      categories: categoriesId,
      homesId,
      images: dataImg,
    };

    console.log({prepareDataToProduct})

   /*  const saveNewproduct = await post(`/api/product/`, prepareDataToProduct);

    if(!saveNewproduct.ok) return console.log('error') */
  };



  const getProduct = async (productId) => {
    const getProductById = await get(`/api/product/${productId}`);

    //TODO: Agregar Toast de ERROR
    if (!getProductById.ok) return alert("error");

    return getProductById;
  };


  const getAllCategories = async () => {
    const getAllCategories = await get("/api/categories");

    //TODO: Agregar Toast de ERROR
    if (!getAllCategories.ok) return alert("error");

    return getAllCategories;
  };

  const getUserHome = async (userId) => {
    const getUserHome = await get(`/api/homes/user/${userId}`);

    //TODO: Agregar Toast de ERROR
    if (!getUserHome.ok) return alert("error");

    return getUserHome.foundUser;
  };

  return (
    <ArticuloView
      handleClosetModalArticle={handleClosetModalArticle}
      open={open}
      hanldeSubmitForm={hanldeSubmitForm}
      getAllCategories={getAllCategories}
      getUserHome={getUserHome}
      getProduct={getProduct}
    />
  );
};
