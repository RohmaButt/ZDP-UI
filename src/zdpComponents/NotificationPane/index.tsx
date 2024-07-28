import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { NotificationActionType } from "../ProfileBar/types";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import * as React from "react";

export interface NotificationPaneProps {
  data?: any;
  user?: any;
  handleActionable: (id: number, type: NotificationActionType) => void;
  handleCloseNotification?: () => void;
  fetchMoreData: () => void;
  hasMore: any;
  pageNumber: number;
}

export const NotificationPaneComponent = (props: NotificationPaneProps) => {
  const {
    data,
    fetchMoreData,
    handleActionable,
    handleCloseNotification,
    user,
    hasMore,
    pageNumber,
  } = props;

  const ReadOnlyNotification = ({
    name,
    desc,
    date,
    profilePic,
    context,
  }: any) => {
    return (
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          margin: "24px",
          marginRight: "16px",
          marginLeft: "16px",
        }}
      >
        <Box display="flex">
          <Avatar
            src={profilePic}
            sx={{
              bgcolor: "#E2E5E9",
              border: "0.50px #E2E5E9 solid",
              width: "26px",
              height: "26px",
              marginRight: "8px",
            }}
          />
          <Typography
            color={"-moz-initial"}
            fontSize={16}
            fontFamily={"Open Sans"}
            fontWeight="400"
            style={{ marginBottom: "1px" }}
          >
            {name ? name : "Default value"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "7px",
          }}
          component={"div"}
        >
          <Box>
            <Typography
              fontFamily="Open Sans"
              fontWeight="400"
              sx={{
                color: "#121C2B",
                fontSize: 16,
              }}
              component={"div"}
            >
              {desc}
              {context === null ? "" : ":"}
              <Box
                fontWeight={600}
                sx={{
                  paddingLeft: "6px",
                }}
                component={"span"}
              >
                {context || ""}
              </Box>
            </Typography>
          </Box>
          <Typography
            fontWeight="500"
            sx={{
              color: "#7A7E8B",
              fontSize: 12,
            }}
          >
            {date}
          </Typography>
        </Box>
      </Box>
    );
  };

  const NeedsApprovalNotification = ({
    name,
    desc,
    date,
    url,
    context,
    profilePic,
  }: any) => {
    return (
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          margin: "24px",
          marginRight: "16px",
          marginLeft: "16px",
          textTransform: "none",
        }}
        component={Link}
        to={url}
      >
        <Box display="flex">
          <Avatar
            src={profilePic}
            sx={{
              bgcolor: "#E2E5E9",
              border: "0.50px #E2E5E9 solid",
              width: "26px",
              height: "26px",
              marginRight: "8px",
            }}
          />
          <Typography
            color={"#323E4D"}
            fontSize={16}
            fontFamily={"Open Sans"}
            fontWeight="400"
            style={{ marginBottom: "1px" }}
          >
            {name ? name : "Default value"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "7px",
          }}
          component={"div"}
        >
          <Box>
            <Typography
              fontFamily="Open Sans"
              fontWeight="400"
              sx={{
                color: "#121C2B",
                fontSize: 16,
              }}
              component={"div"}
            >
              {desc}
              {context === null ? "" : ":"}
              <Box
                fontWeight={600}
                sx={{
                  paddingLeft: "6px",
                }}
                component={"span"}
              >
                {context || ""}
              </Box>
            </Typography>
          </Box>
          <Typography
            fontWeight="500"
            sx={{
              color: "#7A7E8B",
              fontSize: 12,
            }}
          >
            {date}
          </Typography>
          <Box
            sx={{
              width: "160px",
              marginTop: "16px",
            }}
            fontFamily={"Open Sans"}
          >
            <Chip
              sx={{
                background: "#FAE6E6",
                fontSize: 16,
                color: "#C60000",
              }}
              label="Needs Approval"
            />
          </Box>
        </Box>
      </Box>
    );
  };

  const ActionableNotification = ({
    name,
    desc,
    date,
    id,
    profilePic,
    context,
    actionPerformed,
  }: any) => {
    return (
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          margin: "24px",
          marginRight: "16px",
          marginLeft: "16px",
        }}
      >
        <Box display="flex">
          <Avatar
            src={profilePic}
            sx={{
              bgcolor: "#E2E5E9",
              border: "0.50px #E2E5E9 solid",
              width: "26px",
              height: "26px",
              marginRight: "8px",
            }}
          />
          <Typography
            color={"-moz-initial"}
            fontSize={16}
            fontFamily={"Open Sans"}
            fontWeight="400"
            style={{ marginBottom: "1px" }}
          >
            {name ? name : "Default value"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "7px",
          }}
          component={"div"}
        >
          <Box>
            <Typography
              fontFamily="Open Sans"
              fontWeight="400"
              sx={{
                color: "#121C2B",
                fontSize: 16,
              }}
              component={"div"}
            >
              {desc}
              {context === null ? "" : ":"}
              <Box
                fontWeight={600}
                sx={{
                  paddingLeft: "6px",
                }}
                component={"span"}
              >
                {context || ""}
              </Box>
            </Typography>
          </Box>
          <Typography
            fontWeight="500"
            sx={{
              color: "#7A7E8B",
              fontSize: 12,
            }}
          >
            {date}
          </Typography>

          {actionPerformed !== null ? (
            actionPerformed === "APPROVED" ? (
              <Box
                sx={{
                  width: "160px",
                  marginTop: "16px",
                }}
                fontFamily={"Open Sans"}
              >
                <Chip
                  sx={{
                    background: "#F0F9ED",
                    fontSize: 16,
                    color: "#62BB46",
                  }}
                  label="Accepted"
                />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "160px",
                  marginTop: "16px",
                }}
                fontFamily={"Open Sans"}
              >
                <Chip
                  sx={{
                    background: "#FCEEE9",
                    fontSize: 16,
                    color: "#D95323",
                  }}
                  label="Denied"
                />
              </Box>
            )
          ) : (
            <Box
              sx={{
                width: "160px",
                marginTop: "16px",
              }}
              fontFamily={"Open Sans"}
            >
              <Button
                sx={{
                  color: "white",
                  background: "#132640",
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: "500",
                  textTransform: "none",
                  "&:hover": {
                    background: "#005596",
                  },
                }}
                onClick={() =>
                  handleActionable(id, NotificationActionType.APPROVED)
                }
              >
                Accept
              </Button>
              <Button
                sx={{
                  marginLeft: "8px",
                  color: "#132640",
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: "550",
                  textTransform: "none",
                  background: "white",
                  border: "0.50px #C5C7D4 solid",
                }}
                onClick={() =>
                  handleActionable(id, NotificationActionType.DENIED)
                }
              >
                Deny
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Card
      sx={{
        width: 520,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <CardHeader
        onClick={handleCloseNotification}
        sx={{
          padding: "16px",
          paddingBottom: "0px",
        }}
        avatar={
          <Avatar
            sx={{ color: "#005596", backgroundColor: "unset" }}
            aria-label="recipe"
          >
            <Avatar
              sx={{
                bgcolor: "#E6EEF5",
                color: "#005596",
                width: "40px",
                height: "40px",
                position: "relative",
              }}
            >
              <NotificationsActiveIcon />
            </Avatar>
          </Avatar>
        }
        action={
          <IconButton aria-label="Close">
            <CloseIcon />
          </IconButton>
        }
        titleTypographyProps={{
          color: "#121C2B",
          fontSize: 20,
          fontWeight: "500",
        }}
        fontFamily="Montserrat"
        title="Notifications"
      />
      <CardContent>
        <Box
          sx={{
            textAlign: "left",
            paddingBottom: "25px",
          }}
        >
          <div className="main-div-scroll">
            <InfiniteScroll
              className="custom-infinite-scroll"
              dataLength={pageNumber * 5 || 0}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              height={500}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>No more notifications</b>
                </p>
              }
            >
              {data?.map((item: any) => {
                if (item?.type === "READONLY") {
                  return (
                    <ReadOnlyNotification
                      name={item?.createdByUsername}
                      desc={item?.content}
                      context={item?.context}
                      date={item?.createdAt}
                      profilePic={user?.user?.profilePic}
                      url={item?.url}
                    />
                  );
                } else if (item?.type === "ACTIONABLE") {
                  return (
                    <ActionableNotification
                      name={item?.createdByUsername}
                      desc={item?.content}
                      context={item?.context}
                      date={item?.createdAt}
                      profilePic={user?.user?.profilePic}
                      id={item?.id}
                      url={item?.url}
                      actionPerformed={item?.actionPerformed}
                    />
                  );
                } else if (item?.type === "NEEDS_APPROVAL") {
                  return (
                    <NeedsApprovalNotification
                      name={item?.createdByUsername}
                      context={item?.context}
                      desc={item?.content}
                      date={item?.createdAt}
                      profilePic={user?.user?.profilePic}
                      url={item?.url}
                    />
                  );
                }
              })}
            </InfiniteScroll>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};
