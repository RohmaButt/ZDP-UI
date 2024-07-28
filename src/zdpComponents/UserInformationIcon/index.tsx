import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { getFirstTwoLetters } from "../ProfileBar/utils";
import { ProfileBarProps } from "../ProfileBar/types";
import UserInformationPaneComponent from "../UserInformationPane";
import * as React from "react";

const UserInformationIconComponent = (props: ProfileBarProps) => {
  const { handleOpenUserMenu, handleCloseUserMenu, anchorElUser, user } = props;
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 0, marginLeft: "20px" }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar
          sx={{
            bgcolor: "white",
            color: theme.palette.primary.main,
            border: `2px solid ${theme.palette.primary.main}`,
            height: "32px",
            width: "32px",
          }}
          src={user?.user?.profilePic}
        >
          {/* <Typography>{getFirstTwoLetters(user?.user?.firstName)}</Typography> */}
        </Avatar>
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="user-menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <UserInformationPaneComponent
          handleCloseUserMenu={handleCloseUserMenu}
          user={user}
        />
      </Menu>
    </Box>
  );
};

export default UserInformationIconComponent;
