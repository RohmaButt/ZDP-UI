import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import "typeface-montserrat";
import { ViewFilterComponent } from "./ViewFilters";
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

interface HistoryParentProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  notificationData: any;
  columnPending: any;
  notificationLoading: boolean;
  openFilterPopup: boolean;
  handleCloseHandler: () => void;
  runWithOutSave: (filters: any) => void;
  transformValues: (filters: any) => any[];
  runSavedFilters: (val: any) => void;
  PaginationBar: () => JSX.Element;
  onFilterClick: () => void;
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

export const HistoryParentComponent: React.FC<HistoryParentProps> = ({
  runWithOutSave,
  transformValues,
  runSavedFilters,
  onSearchChange,
  search,
  notificationData,
  columnPending,
  notificationLoading,
  openFilterPopup,
  handleCloseHandler,
  PaginationBar,
  onFilterClick,
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
  return (
    <Box
      sx={{
        height: 550,
        width: "100%",
        mb: 12.5,
      }}
    >
      <Box
        paddingX={"20px"}
        paddingTop={"20px"}
        sx={{
          paddingBottom: "46px",
          width: "100%",
          height: "48px",
          justifyContent: "space-between",
          display: "inline-list-item",
          border: "0.50px #E2E5E9 solid",
          borderBottom: "none",
          borderRadius: 4,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Box
          sx={{
            width: "220px",
            height: "34px",
            padding: "0px",
          }}
          component={"div"}
        >
          <TextField
            onChange={onSearchChange}
            value={search}
            placeholder="Search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#7A7E8B" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display={"flex"}>
          <Box>
            <IconButton
              onClick={onFilterClick}
              type="button"
              sx={{
                marginLeft: "8px",
                fontSize: "medium",
                marginTop: "0px",
                color: "#D1D3D4",
                border: "1px solid #C5C7D4",
              }}
              aria-label="search"
            >
              <img src={require("/public/setting.svg")}></img>
            </IconButton>
          </Box>
        </Box>
      </Box>
      <DataGrid
        rows={
          notificationData
            ? notificationData?.GetDataByJsonQuery?.info?.data
            : []
        }
        columns={columnPending}
        loading={notificationLoading}
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
        components={{
          ColumnMenuIcon: ExpandMoreIcon,
          Pagination: PaginationBar,
        }}
        sx={{
          border: "0.50px #E2E5E9 solid",
          borderRadius: 4,
          borderTop: "none",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          fontSize: 13,
          color: "#323E4D",
          fontFamily: "Open Sans",
          fontWeight: "400",
          margin: 0,
          padding: 0,
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: 12,
            fontFamily: "Montserrat",
          },
        }}
      />
      <Dialog
        open={openFilterPopup}
        sx={{ "& .MuiDialog-paper": { width: "100%" } }}
        PaperProps={{ style: { borderRadius: "25px" } }}
        maxWidth="lg"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ViewFilterComponent
          onClose={handleCloseHandler}
          column={columnPending}
          runWithOutSave={runWithOutSave}
          transformValues={transformValues}
          runSavedFilters={runSavedFilters}
          dto="Notification"
          createFilter={createFilter}
          setCreateFilter={setCreateFilter}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          searchValue={searchValue}
          debounceVal={debounceVal}
          selectedRowColor={selectedRowColor}
          setSelectedRowColor={setSelectedRowColor}
          selectedRowvalue={selectedRowvalue}
          setSelectedRowvalue={setSelectedRowvalue}
          selectedRowFilterId={selectedRowFilterId}
          setSelectedFilterId={setSelectedFilterId}
          setSelectedRowId={setSelectedRowId}
          setSelectedRowisActive={setSelectedRowisActive}
          openShare={openShare}
          setOpenShare={setOpenShare}
          values={values}
          setValues={setValues}
          UseridsArray={UseridsArray}
          setUserIdsArray={setUserIdsArray}
          clonefilter={cloneFilter}
          cloneOrshare={cloneOrshare}
          setcloneOrshare={setcloneOrshare}
          current_user={current_user}
          disableToggleButton={disableToggleButton}
          shareFilter={shareFilter}
          loading={loading}
          error={error}
          cloneFilter={cloneFilter}
          unshareFilter={unshareFilter}
          handleShareFilterApi={handleShareFilterApi}
          handleCloneFilterApi={handleCloneFilterApi}
          onSetValue={onSetValue}
          OnClickRun={OnClickRun}
          AllFiltersData={AllFiltersData}
          AllFiltersRefetch={AllFiltersRefetch}
          MyFiltersData={AllFiltersData}
          MyFiltersRefetch={MyFiltersData}
          SharedByMeFiltersData={SharedByMeFiltersData}
          SharedByMeFiltersRefetch={SharedByMeFiltersRefetch}
          SharedWithMeFiltersData={SharedWithMeFiltersData}
          SharedWithMeFiltersRefetch={SharedWithMeFiltersRefetch}
          onCloseShare={onCloseShare}
          onClickShare={onClickShare}
          onCloneShare={onCloneShare}
          featureFlagActionShareConnection={featureFlagActionShareConnection}
          featureFlagActionDuplicateConnection={
            featureFlagActionDuplicateConnection
          }
          saveDataShare={saveDataShare}
          handleUnshareFilterApi={handleUnshareFilterApi}
          viewFilterTables={viewFilterTables}
          ViewFilterSharedTables={ViewFilterSharedTables}
          handleTabChange={handleTabChange}
          onCreateFilterClick={onCreateFilterClick}
          handleSearchChange={handleSearchChange}
          createFilterValues={createFilterValues}
          setCreateFilterValues={setCreateFilterValues}
          onChange={onChange}
          createFilter1={createFilter1}
          loading1={loading1}
          filters={filters}
          setFilters={setFilters}
          OnClickRun1={OnClickRun1}
          ResetFilterValues={ResetFilterValues}
          handleCreateFilterApi={handleCreateFilterApi}
          setUser={setUser}
          optionsVal={optionsVal}
          setOptionsVal={setOptionsVal}
          instance={instance}
          accounts={accounts}
          textVal={textVal}
          setTextVal={setTextVal}
          setTextValue={setTextValue}
          getZDPusers={getZDPusers}
          getAllUsers={getAllUsers}
          debounceVal1={debounceVal1}
        />
      </Dialog>
    </Box>
  );
};
