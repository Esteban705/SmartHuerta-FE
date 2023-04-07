import { useContext, useState } from "react";
import { HttpContext } from "../../../Context/httpContext";
import ModalEditProfileUserUI from "./ModalEditProfileUserUI";

const ModalEditUserProfileServices = ({
  openEditProfileModal,
  handleCloseModalProfile,
  userData,
}) => {
  const { put } = useContext(HttpContext);
  const [submitResponse, setSubmitResponse] = useState({
    response: "",
    isLoading: false,
  });

  const handleSubmitEditUser = async (values, dataImage, userId) => {
    const prepareData = {
      ...values,
      dataImage: dataImage[0] || userData?.usuario?.imgId,
    };
    setSubmitResponse({ ...submitResponse, isLoading: true });
    try {
      const editUser = await put(`/api/auth/${userId}`, prepareData);
      setSubmitResponse({ ...submitResponse, response: editUser });
      if (!submitResponse.response.ok) {
        return;
      }
      return editUser;
    } catch (error) {
      console.log(error);
    }
    setSubmitResponse({ ...submitResponse, isLoading: false, response: "" });
  };

  return (
    <ModalEditProfileUserUI
      userData={userData}
      openEditProfileModal={openEditProfileModal}
      handleCloseModalProfile={handleCloseModalProfile}
      handleSubmitEditUser={handleSubmitEditUser}
      submitResponse={submitResponse}
      setSubmitResponse={setSubmitResponse}
    />
  );
};

export default ModalEditUserProfileServices;
