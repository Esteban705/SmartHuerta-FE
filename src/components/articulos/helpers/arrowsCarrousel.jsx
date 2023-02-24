import { consts } from "react-elastic-carousel";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export const arrowsCarrousel = ({ type, onClick, isEdge }) => {
    const left = {
      left: "0px",
      top: "40%",
      bottom: "40%",
      position: "absolute",
      zIndex: 1,
      fontSize: "60px",
    };
    const rigth = {
      rigth: "0px",
      top: "40%",
      bottom: "40%",
      position: "absolute",
      zIndex: 1,
      fontSize: "60px",
    };

    const pointer =
      type === consts.PREV ? (
        <ArrowLeftIcon style={left} />
      ) : (
        <ArrowRightIcon style={rigth} className=".MuiSvgIcon-root" />
      );


    return (
      <button onClick={onClick} disabled={isEdge}>
        {isEdge ? null : pointer}
      </button>
    );
  };