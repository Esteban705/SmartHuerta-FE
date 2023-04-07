import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Settings from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AvatarOptions = ({ userData }) => {
  const [openOptions, setOpenOptions] = useState(null);
  const { usuario } = userData;

  const handleClickOpenOptions = (event) => {
    setOpenOptions(event.currentTarget);
  };

  const handleCloseOptions = () => {
    setOpenOptions(null);
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClickOpenOptions}
        color="inherit"
      >
        {usuario.imgId ? (
          <Avatar src={usuario?.imgId.dataImg} />
        ) : (
          <Avatar style={{ backgroundColor: "green" }}>
            {userData?.usuario.name.slice(0, 2).toUpperCase() || ""}
          </Avatar>
        )}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={openOptions}
        keepMounted
        open={Boolean(openOptions)}
        onClose={handleCloseOptions}
      >
        <Link to={"/Perfil".trim()}>
          <MenuItem
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              {" "}
              Mi Perfil: {usuario?.name.toUpperCase()}
            </Typography>
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AutorenewIcon fontSize="small" />
          </ListItemIcon>
          Trueques
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configuraciones
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AvatarOptions;
