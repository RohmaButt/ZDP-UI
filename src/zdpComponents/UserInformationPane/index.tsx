import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { MenuItem } from "@mui/material";
import * as React from "react";

const UserInformationPaneComponent = (props: any) => {
  const settings = ["Profile", "Logout"];
  const { handleCloseUserMenu, user } = props;

  return (
    <>
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
        <MenuItem
          key={setting}
          onClick={(ev) => handleCloseUserMenu(ev, setting)}
        >
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </>
  );
};

export default UserInformationPaneComponent;
