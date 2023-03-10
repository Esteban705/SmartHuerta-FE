import React from "react";
import { useContext } from "react";
import { HttpContext } from "../../../Context/httpContext";
import ModalEditProfileUserUI from "./ModalEditProfileUserUI";

const ModalEditUserProfileServices = ({
  openEditProfileModal,
  handleCloseModalProfile,
  userData,
}) => {
  const { put } = useContext(HttpContext);
  const hanldeSubmitForm = async (values, dataImage, userId) => {
    const prepareData = {
      ...values,
      dataImage: dataImage[0],
    };
    const editUser = await put(`/api/auth/${userId}`, prepareData);
    return editUser
  };

  return (
    <ModalEditProfileUserUI
      userData={userData}
      openEditProfileModal={openEditProfileModal}
      handleCloseModalProfile={handleCloseModalProfile}
      hanldeSubmitForm={hanldeSubmitForm}
    />
  );
};

export default ModalEditUserProfileServices;
