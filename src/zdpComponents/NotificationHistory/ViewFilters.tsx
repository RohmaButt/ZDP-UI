import {
  Tabs,
  Tab,
  Box,
  Button,
  Typography,
  IconButton,
  InputBase,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CreateFilter from "./CreateFilter";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Footer } from "./Footer";
import DialogComponent from "./Dialog";
import ShareDialog from "./ShareDialog";
import React from "react";

type User = {
  businessPhones: [];
  displayName: string;
  givenName: string;
  id: string;
  jobTitle: string | null;
  mail: string;
  mobilePhone: string | null;
  officeLocation: string | null;
  preferredLanguage: string | null;
  surname: string;
  userPrincipalName: string;
};

interface Filter {
  FilterKey: string;
  FilterCondition: string;
  FilterValue?: string;
  GreaterValue?: string;
  LesserValue?: string;
  GreaterEqualValue?: string;
  LesserEqualValue?: string;
}

interface OptionType {
  inputValue: string;
  name: string;
  email: string;
  id?: string;
}

interface CreateFilterValues {
  filterName: string;
  filterDescription: string;
  filterKey: string;
  filterCondition: string;
  filterValue: string;
  column: any[];
}

interface ViewFilterProps {
  column: any;
  onClose: () => void;
  runWithOutSave: (filters: any) => void;
  transformValues: (filters: any) => any[];
  runSavedFilters: (val: any) => void;
  dto: string;
  createFilter: boolean;
  setCreateFilter: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
  debounceVal: any;
  selectedRowColor: null;
  setSelectedRowColor: React.Dispatch<React.SetStateAction<null>>;
  selectedRowvalue: string;
  setSelectedRowvalue: React.Dispatch<React.SetStateAction<string>>;
  selectedRowFilterId: string;
  setSelectedFilterId: React.Dispatch<React.SetStateAction<string>>;
  setSelectedRowId: React.Dispatch<React.SetStateAction<string>>;
  setSelectedRowisActive: React.Dispatch<React.SetStateAction<boolean>>;
  openShare: boolean;
  setOpenShare: React.Dispatch<React.SetStateAction<boolean>>;
  values: OptionType[];
  setValues: React.Dispatch<React.SetStateAction<OptionType[]>>;
  UseridsArray: number[];
  setUserIdsArray: React.Dispatch<React.SetStateAction<number[]>>;
  clonefilter: boolean;
  cloneOrshare: boolean;
  setcloneOrshare: React.Dispatch<React.SetStateAction<boolean>>;
  current_user: any;
  disableToggleButton: boolean;
  shareFilter: any;
  loading: any;
  error: any;
  cloneFilter: any;
  unshareFilter: any;
  handleShareFilterApi: () => Promise<void>;
  handleCloneFilterApi: () => Promise<void>;
  onSetValue: (val: OptionType[]) => void;
  OnClickRun: (val: any) => void;
  AllFiltersData: any;
  AllFiltersRefetch: any;
  MyFiltersData: any;
  MyFiltersRefetch: any;
  SharedByMeFiltersData: any;
  SharedByMeFiltersRefetch: any;
  SharedWithMeFiltersData: any;
  SharedWithMeFiltersRefetch: any;
  onCloseShare: () => void;
  onClickShare: (cardData: any) => void;
  onCloneShare: (cardData: any) => void;
  featureFlagActionShareConnection: boolean;
  featureFlagActionDuplicateConnection: boolean;
  saveDataShare: () => Promise<void>;
  handleUnshareFilterApi: (event: any, user: any) => void;
  viewFilterTables: (users: any) => JSX.Element;
  ViewFilterSharedTables: (users: any) => JSX.Element;
  handleTabChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  onCreateFilterClick: () => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  createFilterValues: CreateFilterValues;
  setCreateFilterValues: React.Dispatch<
    React.SetStateAction<CreateFilterValues>
  >;
  onChange: (fieldName: keyof CreateFilterValues, value: string) => void;
  createFilter1: any;
  loading1: any;
  filters: Filter[];
  setFilters: React.Dispatch<React.SetStateAction<Filter[]>>;
  OnClickRun1: () => void;
  ResetFilterValues: () => void;
  handleCreateFilterApi: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User[] | undefined>>;
  optionsVal: OptionType[];
  setOptionsVal: React.Dispatch<React.SetStateAction<OptionType[]>>;
  instance: any;
  accounts: any;
  textVal: string;
  setTextVal: React.Dispatch<React.SetStateAction<string>>;
  setTextValue: (value: string) => void;
  getZDPusers: any;
  getAllUsers: (searchParam?: string) => void;
  debounceVal1: any;
}

export const ViewFilterComponent: React.FC<ViewFilterProps> = ({
  column,
  onClose,
  runWithOutSave,
  transformValues,
  runSavedFilters,
  dto,
  createFilter,
  setCreateFilter,
  selectedTab,
  setSelectedTab,
  searchValue,
  debounceVal,
  selectedRowColor,
  setSelectedRowColor,
  selectedRowvalue,
  setSelectedRowvalue,
  selectedRowFilterId,
  setSelectedFilterId,
  setSelectedRowId,
  setSelectedRowisActive,
  openShare,
  setOpenShare,
  values,
  setValues,
  UseridsArray,
  setUserIdsArray,
  clonefilter,
  cloneOrshare,
  setcloneOrshare,
  current_user,
  disableToggleButton,
  shareFilter,
  loading,
  error,
  cloneFilter,
  unshareFilter,
  handleShareFilterApi,
  handleCloneFilterApi,
  onSetValue,
  OnClickRun,
  AllFiltersData,
  AllFiltersRefetch,
  MyFiltersData,
  MyFiltersRefetch,
  SharedByMeFiltersData,
  SharedByMeFiltersRefetch,
  SharedWithMeFiltersData,
  SharedWithMeFiltersRefetch,
  onCloseShare,
  onClickShare,
  onCloneShare,
  featureFlagActionShareConnection,
  featureFlagActionDuplicateConnection,
  saveDataShare,
  handleUnshareFilterApi,
  viewFilterTables,
  ViewFilterSharedTables,
  handleTabChange,
  onCreateFilterClick,
  handleSearchChange,
  createFilterValues,
  setCreateFilterValues,
  onChange,
  createFilter1,
  loading1,
  filters,
  setFilters,
  OnClickRun1,
  ResetFilterValues,
  handleCreateFilterApi,
  setUser,
  optionsVal,
  setOptionsVal,
  instance,
  accounts,
  textVal,
  setTextVal,
  setTextValue,
  getZDPusers,
  getAllUsers,
  debounceVal1,
}) => {
  // ---------------------------------------
  //stays
  const getDefaultFilterArguments = {
    $and: {
      $and: [{ "filter.dto": { $eq: dto } }],
    }, // For Tables
  };
  //stays
  const getDefaultFilterArgumentsWithSearch = {
    $and: {
      $and: [
        { "filter.dto": { $eq: dto } },
        { "filter.name": { $like: searchValue } },
      ], // For Tables
    },
  };

  return createFilter ? (
    <CreateFilter
      refetchViewAllFilters={AllFiltersRefetch}
      refetchViewMyFilters={MyFiltersRefetch}
      runWithOutSave={runWithOutSave}
      setCreateFilters={setCreateFilter}
      column={column}
      onClose={onClose}
      createFilterValues={createFilterValues}
      dto={dto}
      onChange={onChange}
      transformValues={transformValues}
      handleCreateFilterApi={handleCreateFilterApi}
      loading={loading1}
      setFilters={setFilters}
      ResetFilterValues={ResetFilterValues}
      filters={filters}
      OnClickRun={OnClickRun1}
    />
  ) : (
    <Box sx={{}}>
      {}
      <Box sx={{ padding: "25px" }}>
        <Box mb={2} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Product Data Filters</Typography>
          <Button
            sx={{ padding: "3px", minWidth: "0%" }}
            onClick={onClose}
            color="inherit"
            data-testid="close"
          >
            <CloseIcon sx={{ color: "#7A7E8B" }} />
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginTop: 3,
            marginBottom: 2,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <InputBase
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            autoFocus
            data-testid="search-field"
            sx={{
              height: "35px",
              padding: "4px",
              borderRadius: "5px",
              marginRight: "15px",
              border: "1px solid #E2E5E9",
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            style={{
              textTransform: "none",
              fontWeight: "bold",
              height: "fit-content",
              marginRight: "5px",
              width: "100px",
            }}
            size="small"
            onClick={onCreateFilterClick}
            variant="contained"
            data-testid="create-filter"
          >
            Create Filter
          </Button>
        </Box>
      </Box>
      {/* Table and tabs starts from here */}
      <Box sx={{ float: "left", width: "100%", marginBottom: "30px" }}>
        <Tabs
          sx={{
            borderBottom: "1px solid #E2E5E9",
            "& .MuiTabs-indicator": { backgroundColor: "#005596" },
          }}
          value={selectedTab}
          onChange={handleTabChange}
        >
          <Tab
            label="All Filters"
            sx={{
              textTransform: "none",
              "&.Mui-selected": { color: "#005596" },
              color: "#132640",
              fontSize: "14px",
            }}
          />
          <Tab
            label="My Filters"
            sx={{
              textTransform: "none",
              "&.Mui-selected": { color: "#005596" },
              color: "#132640",
              fontSize: "14px",
            }}
          />
          <Tab
            label="Shared By Me"
            sx={{
              textTransform: "none",
              "&.Mui-selected": { color: "#005596" },
              color: "#132640",
              fontSize: "14px",
            }}
          />
          <Tab
            label="Shared With Me"
            sx={{
              textTransform: "none",
              "&.Mui-selected": { color: "#005596" },
              color: "#132640",
              fontSize: "14px",
            }}
          />
        </Tabs>
        <div>
          {selectedTab === 0 &&
            viewFilterTables(AllFiltersData?.userFilterGetAll?.data)}
          {selectedTab === 1 &&
            viewFilterTables(MyFiltersData?.userFilterGetAll?.data)}
          {selectedTab === 2 &&
            ViewFilterSharedTables(
              SharedByMeFiltersData?.userFilterGetAll?.data
            )}
          {selectedTab === 3 &&
            ViewFilterSharedTables(
              SharedWithMeFiltersData?.userFilterGetAll?.data
            )}

          {/* {selectedTab === 1 && (
              <Box
                m={2}
                paddingTop={0}
                sx={{ height: '300px', overflow: 'auto' }}
              >
                <Table
                  stickyHeader={true}
                  size="small"
                  sx={{
                    border: '1px solid #E2E5E9',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography fontWeight={'bold'} color={'#323E4D'}>
                          Filter Name
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight={'bold'} color={'#323E4D'}>
                          Description
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight={'bold'} color={'#323E4D'}>
                          Created By
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button>
                          <MoreHorizIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sharedData &&
                      sharedData?.userFilterGetAll?.data?.length > 0 &&
                      sharedData?.userFilterGetAll?.data?.map((row1: any) => {
                        return (
                          <TableRow
                            key={row1.filterId}
                            sx={{ fontSize: '13px', color: '#323E4D' }}
                          >
                            <TableCell>{row1.filterId}</TableCell>
                            <TableCell>{row1.Filter.name}</TableCell>
                            <TableCell>
                              <AccountCircleRoundedIcon
                                sx={{ verticalAlign: 'bottom' }}
                              />{' '}
                              {row1.userId}
                            </TableCell>
                            <TableCell align="right">
                              <Button>
                                <MoreHorizIcon />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {sharedData &&
                      sharedData?.userFilterGetAll?.data?.length === 0 && (
                        <TableRow
                          role="data-rows"
                          sx={{ fontSize: '13px', color: '#323E4D' }}
                        >
                          <TableCell colSpan={4} align="center">
                            No record found
                          </TableCell>
                        </TableRow>
                      )}
                  </TableBody>
                </Table>
              </Box>
            )} 
              
            {selectedTab === 2 && (
              <Box
                m={2}
                paddingTop={0}
                sx={{ height: '300px', overflow: 'auto' }}
              >
                <Typography variant="h5">Tab 3 Content</Typography>
                <Typography>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
              </Box>
            )}
            {selectedTab === 3 && (
              <Box
                m={2}
                paddingTop={0}
                sx={{ height: '300px', overflow: 'auto' }}
              >
                <Typography variant="h5">Tab 4 Content</Typography>
                <Typography>
                  Sed do eiusmod tempor et dolore magna aliqua.
                </Typography>
              </Box>
            )}*/}
        </div>
        <DialogComponent
          open={openShare}
          handleClose={onCloseShare}
          dialogChildrenStyle={{ paddingX: "0px" }}
          firstDivider={false}
          handleSave={saveDataShare}
          saveButtonText={"Share"}
          isLoading={loading}
        >
          <ShareDialog
            values={values}
            onSetValue={onSetValue}
            title={"Share via Filters"}
            userType="ZDP"
            optionsVal={optionsVal}
            setTextValue={setTextValue}
            textVal={textVal}
          />
        </DialogComponent>
      </Box>
      {/* Table ends here */}
      <br />
      <Footer
        onClose={onClose}
        onRun={() => OnClickRun(selectedRowvalue)}
        onSave={onClose}
        isCreateFilter={false}
      />
    </Box>
  );
};
