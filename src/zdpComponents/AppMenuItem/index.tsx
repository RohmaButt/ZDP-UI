import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import * as React from "react";

const AppMenuItem = ({ title, image, href, disabled = false }: any) => {
  return (
    <IconButton
      href={href ? href : "https://www.zones.com/"}
      target={"_blank"}
      className="app-menu-item-icon"
      disableRipple
      disabled={disabled}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        alignSelf: "center",
        padding: 2,
      }}
      color={"info"}
    >
      <img color="grey" src={image} height={"25px"} width={"25px"} />
      <Typography
        width={"100%"}
        mt={"5px"}
        sx={{ fontWeight: "bold" }}
        variant="body2"
      >
        {title.toUpperCase()}
      </Typography>
    </IconButton>
  );
};

export default AppMenuItem;
