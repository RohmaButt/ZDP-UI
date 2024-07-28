import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { getFirstTwoLetters } from "../ProfileBar/utils";
import { ProfileBarProps } from "../ProfileBar/types";
import * as React from "react";

const UserInformationComponent = (props: ProfileBarProps) => {
  const { handleOpenUserMenu } = props;
  const theme = useTheme();
  const settings = ["Profile", "Logout"];
  const { anchorElUser } = props;
  const { handleCloseUserMenu } = props;
  const { user } = props;

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "14px",
          }}
          component={"div"}
        >
          <Typography>{user?.user?.firstName}</Typography>
          <Typography variant="body2">{user?.user?.email}</Typography>
        </Box>
        <Divider sx={{ marginY: "10px" }} />
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={(ev) => handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserInformationComponent;
