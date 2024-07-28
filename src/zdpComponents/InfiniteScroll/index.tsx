import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import { GET_NOTIFICATIONS } from "../../graphql/notifications/queries";
// import { useQuery } from "@apollo/client";
import * as React from "react";

export const InfiniteScrollComponent = () => {
  const [PaginatedDataFromDB, setPaginatedDataFromDB] = useState<any>([]);
  const [appendedData, setAppendedData] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // const {
  //   loading: loadingNotficationsData,
  //   error: errorNotficationsData,
  //   data: notficationsData,
  //   refetch: refetchNotifications,
  // } = useQuery(GET_NOTIFICATIONS, {
  //   variables: {
  //     pagination: { limit: 5, offset: page },
  //   },
  // });

  // useEffect(() => {
  //   setPaginatedDataFromDB(notficationsData?.getAllNotification?.data);
  //   console.log("page", page);
  //   if (page === 0) setAppendedData(notficationsData?.getAllNotification?.data);
  // }, [notficationsData?.getAllNotification?.data]);

  const fetchData = () => {
    // try {
    //   console.log("fetchData");
    //   setPage(page + 1);
    //   refetchNotifications(); //Fetch next page
    //   const newData = PaginatedDataFromDB;
    //   console.log("newData", newData);
    //   if (appendedData === undefined || appendedData?.length >= 100) {
    //     setHasMore(false);
    //     return;
    //   }
    //   if (
    //     PaginatedDataFromDB === undefined ||
    //     PaginatedDataFromDB?.length === 0
    //   ) {
    //     setHasMore(false);
    //     return;
    //   } else {
    //     setAppendedData((prevFirstArray: any) => [
    //       ...prevFirstArray,
    //       ...newData,
    //     ]);
    //   }
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  return (
    <div className=".main-div-scroll">
      <InfiniteScroll
        className="custom-infinite-scroll"
        dataLength={appendedData?.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={100}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more notifications</b>
          </p>
        }
      >
        {appendedData?.length > 0 &&
          appendedData?.map((item: any) => (
            <div key={item?.id}>
              {item?.id}
              {item?.id}
            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
};
