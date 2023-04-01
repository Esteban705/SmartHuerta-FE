import { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import { ArticuloView } from "./Views/ArticuloView";
import { toast } from "react-hot-toast";

export const ArticuloPage = ({ open, handleClosetModalArticle, productID }) => {
  const { get, post, put } = useContext(HttpContext);

  const hanldeSubmit = async (values, dataImg) => {
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

    const saveNewproduct =
      productID !== "0"
        ? await put(`/api/product/${productID}`, prepareDataToProduct)
        : await post(`/api/product/`, prepareDataToProduct);

    return saveNewproduct;
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
    <>
      <ArticuloView
        handleClosetModalArticle={handleClosetModalArticle}
        open={open}
        hanldeSubmit={hanldeSubmit}
        getAllCategories={getAllCategories}
        getUserHome={getUserHome}
        getProduct={getProduct}
        productID={productID}
      />
    </>
  );
};
