import resizeEncodedPicture from "../../user/avatar/helpers/resizeEncodedPicture";

const onImageChange = async (encodedPicture, setDataImg, dataImg, file) => {
  const newEncodedPicture = await resizeEncodedPicture(
    encodedPicture,
    150,
    150
  );


  setDataImg([...dataImg, {newEncodedPicture, name: file.name}]);
};

export const handleUpgradeImg = async (file, setDataImg, dataImg) => {
  const fileAvatar = file;
  const render = new FileReader();
  render.readAsDataURL(fileAvatar);


  render.onload = () => {
    onImageChange(render.result, setDataImg, dataImg, file);
  };
};
