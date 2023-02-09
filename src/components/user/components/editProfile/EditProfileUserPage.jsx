import React from "react";
import EditProfileUserUI from "./EditProfileUserUI";

const EditProfileUserPage = ({
  openEditProfileModal,
  handleCloseModalProfile,
}) => {
  return (
    <EditProfileUserUI
      openEditProfileModal={openEditProfileModal}
      handleCloseModalProfile={handleCloseModalProfile}
    />
  );
};

export default EditProfileUserPage;
