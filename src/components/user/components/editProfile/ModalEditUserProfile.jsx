import React from "react";
import ModalEditProfileUserUI from "./ModalEditProfileUserUI";

const EditProfileUserPage = ({
  openEditProfileModal,
  handleCloseModalProfile,userData
}) => {
  return (
    <ModalEditProfileUserUI
    userData={userData}
      openEditProfileModal={openEditProfileModal}
      handleCloseModalProfile={handleCloseModalProfile}
    />
  );
};

export default EditProfileUserPage;
