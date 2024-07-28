import {
  Box,
  Button,
  Typography,
  Divider,
  IconButton,
  Grid,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import { Footer } from "./Footer";
import { useState } from "react";
import React from "react";

const Conditions1 = [
  {
    label: "Is/Equals",
    value: "term",
  },
  {
    label: "Is Not",
    value: "isNot",
  },
  {
    label: "Greater Than",
    value: "greaterValue",
  },
  {
    label: "Less than",
    value: "lessValue",
  },
  {
    label: "Between",
    value: "between",
  },
  {
    label: "Less than equal to",
    value: "lessOrEqualValue",
  },
  {
    label: "Greater than equal to",
    value: "greaterOrEqualValue",
  },
  {
    label: "Contains",
    value: "contains",
  },
  {
    label: "Is Empty",
    value: "isEmpty",
  },
  {
    label: "Not Empty",
    value: "isNotEmpty",
  },
];

interface CreateFilterValues {
  filterName: string;
  filterDescription: string;
  filterKey: string;
  filterCondition: string;
  filterValue: string;
  column: any[];
}

export interface Filter {
  FilterKey: string;
  FilterCondition: string;
  FilterValue?: string;
  GreaterValue?: string;
  LesserValue?: string;
  GreaterEqualValue?: string;
  LesserEqualValue?: string;
}

interface CreateFilterProps {
  refetchViewAllFilters: any;
  refetchViewMyFilters: any;

  setCreateFilters: React.Dispatch<React.SetStateAction<boolean>>;
  column: any;
  onClose: () => void;
  createFilterValues: CreateFilterValues;
  onChange: (fieldName: keyof CreateFilterValues, value: string) => void;
  runWithOutSave: (filters: any) => void;
  transformValues: (filters: any) => any[];
  dto: string;
  handleCreateFilterApi: () => Promise<void>;
  loading: any;
  OnClickRun: () => void;
  filters: Filter[];
  setFilters: (value: React.SetStateAction<Filter[]>) => void;
  ResetFilterValues: () => void;
}

const CreateFilters: React.FC<CreateFilterProps> = ({
  refetchViewAllFilters,
  refetchViewMyFilters,
  setFilters,
  setCreateFilters,
  onClose,
  createFilterValues,
  onChange,
  column,
  runWithOutSave,
  transformValues,
  dto,
  handleCreateFilterApi,
  loading,
  OnClickRun,
  filters,
  ResetFilterValues,
}) => {
  const {
    filterName,
    filterDescription,
    filterKey,
    filterCondition,
    filterValue,
  } = createFilterValues;

  const [searchValue, setSearchValue] = useState("");

  const RepeaterRow = () => {
    return filters.map((filter: any, index) => (
      <Box
        sx={{
          marginTop: "10px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Select
              //value = {filter.filterKey}
              value={filter.FilterKey}
              onChange={(e) => handleSelectChangeIndex("filterKey", e, index)}
              sx={{
                width: "100%",
                height: "41px",
              }}
            >
              {/* YE KEY FIELD HATANAY SEY FIELD PA TEXT ATA VALUE MAY */}
              {/* <MenuItem value="Key Field">Key Field</MenuItem> */}
              {column?.map((item: any, index: any) => (
                <MenuItem key={index} value={item.field}>
                  {item.headerName}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Select
              value={filter.FilterCondition}
              defaultValue={"Conditions"}
              onChange={(e) =>
                handleSelectChangeIndex("filterCondition", e, index)
              }
              sx={{
                width: "100%",
                height: "41px",
              }}
            >
              <MenuItem value="Conditions">Conditions</MenuItem>
              {Conditions1.map((condition, index) => (
                <MenuItem key={index} value={condition.value}>
                  {condition.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {filter.FilterCondition == "isNotEmpty" ||
              filter.FilterCondition == "isEmpty" ? (
                ""
              ) : (
                <TextField
                  name="value"
                  label="Value"
                  value={returnTextFieldValue(index)}
                  onChange={(e) => {
                    handleInputChangeIndex("filterValue", e, index);
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      height: "8.5px", // Adjust the height value as per your preference
                    },
                    "& label": {
                      fontSize: "15px",
                      textAlign: "center",
                    },
                  }}
                />
              )}
              &nbsp;
              {filter.FilterCondition == "between" ? (
                <TextField
                  name="value"
                  label="Value"
                  value={filter.LesserEqualValue}
                  onChange={(e) => {
                    let newFilters = [...filters];
                    newFilters[index].LesserEqualValue = e.target.value;
                    setFilters(newFilters);
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      height: "8.5px", // Adjust the height value as per your preference
                    },
                    "& label": {
                      fontSize: "15px",
                      textAlign: "center",
                    },
                  }}
                />
              ) : (
                ""
              )}
              <IconButton
                type="button"
                sx={{
                  marginLeft: "10px",
                  fontSize: "medium",
                  marginTop: "0px",
                  border: "1px solid #C5C7D4",
                  borderRadius: "4px",
                  height: "40px",
                }}
                aria-label="add"
                onClick={handleAddFilter}
              >
                <AddIcon
                  fontSize="medium"
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              </IconButton>
              {index >= 1 && (
                <IconButton
                  type="button"
                  sx={{
                    display: "flex",
                    marginLeft: "10px",
                    fontSize: "medium",
                    marginTop: "0px",
                    border: "1px solid #C5C7D4",
                    borderRadius: "4px",
                    height: "40px",
                  }}
                  aria-label="add"
                  onClick={() => handleMinimizeFilter(index)}
                >
                  <MinimizeIcon
                    fontSize="medium"
                    sx={{
                      marginBottom: "12px",

                      fontWeight: "bold",
                    }}
                  />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    ));
  };

  const handleInputChange = (
    fieldName: keyof CreateFilterValues,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(fieldName, e.target.value);
  };

  const returnTextFieldValue = (index: any) => {
    let newFilters = [...filters];

    if (newFilters[index].FilterCondition == "greaterValue")
      return newFilters[index].GreaterValue;
    else if (newFilters[index].FilterCondition == "lessValue")
      return newFilters[index].LesserValue;
    else if (newFilters[index].FilterCondition == "greaterOrEqualValue")
      return newFilters[index].GreaterEqualValue;
    else if (newFilters[index].FilterCondition == "lessOrEqualValue")
      return newFilters[index].LesserEqualValue;
    else if (newFilters[index].FilterCondition == "between")
      return newFilters[index].GreaterEqualValue;
    else return newFilters[index].FilterValue;
  };
  const handleInputChangeIndex = (
    fieldName: keyof CreateFilterValues,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: any
  ) => {
    let newFilters = [...filters];

    if (fieldName == "filterValue") {
      if (newFilters[index].FilterCondition == "greaterValue")
        newFilters[index].GreaterValue = e.target.value;
      else if (newFilters[index].FilterCondition == "lessValue")
        newFilters[index].LesserValue = e.target.value;
      else if (newFilters[index].FilterCondition == "greaterOrEqualValue")
        newFilters[index].GreaterEqualValue = e.target.value;
      else if (newFilters[index].FilterCondition == "lessOrEqualValue")
        newFilters[index].LesserEqualValue = e.target.value;
      else if (newFilters[index].FilterCondition == "between")
        newFilters[index].GreaterEqualValue = e.target.value;
      else newFilters[index].FilterValue = e.target.value;
    }
    setFilters(newFilters);
  };

  const handleSelectChangeIndex = (
    fieldName: keyof CreateFilterValues,
    e: SelectChangeEvent<string>,
    index: any
  ) => {
    let newFilters = [...filters];
    if (fieldName == "filterKey") {
      newFilters[index].FilterKey = e.target.value;
    } else if (fieldName == "filterCondition") {
      newFilters[index].FilterCondition = e.target.value;
    }
    newFilters[index].FilterValue = "";
    newFilters[index].GreaterEqualValue = "";
    newFilters[index].GreaterValue = "";
    newFilters[index].LesserEqualValue = "";
    newFilters[index].LesserValue = "";
    setFilters(newFilters);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleMinimizeFilter = (index: any) => {
    let newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  const handleAddFilter = () => {
    let newFilters = {
      FilterKey: filterKey,
      FilterCondition: filterCondition,
      FilterValue: filterValue,
    };
    setFilters((prevFilters: any) => [...prevFilters, newFilters]);
    // console.log(filters);
    // console.log();
  };

  const GetFilters = (): any[] => {
    let newFilters = [];
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].FilterCondition == "between") {
        newFilters.push({
          range: {
            name: filters[i].FilterKey,
            greaterOrEqualValue: filters[i].GreaterEqualValue,
            lessOrEqualValue: filters[i].LesserEqualValue,
          },
        });
      } else if (filters[i].FilterCondition == "greaterValue") {
        newFilters.push({
          range: {
            name: filters[i].FilterKey,
            greaterValue: filters[i].GreaterValue,
          },
        });
      } else if (filters[i].FilterCondition == "lessValue") {
        newFilters.push({
          range: {
            name: filters[i].FilterKey,
            lessValue: filters[i].LesserValue,
          },
        });
      } else if (filters[i].FilterCondition == "greaterOrEqualValue") {
        newFilters.push({
          range: {
            name: filters[i].FilterKey,
            greaterOrEqualValue: filters[i].GreaterEqualValue,
          },
        });
      } else if (filters[i].FilterCondition == "lessOrEqualValue") {
        newFilters.push({
          range: {
            name: filters[i].FilterKey,
            lessOrEqualValue: filters[i].LesserEqualValue,
          },
        });
      } else if (
        filters[i].FilterCondition == "isEmpty" ||
        filters[i].FilterCondition == "isNotEmpty"
      ) {
        newFilters.push({
          [filters[i].FilterCondition]: { name: filters[i].FilterKey },
        });
      } else {
        newFilters.push({
          [filters[i].FilterCondition]: {
            name: filters[i].FilterKey,
            value: filters[i].FilterValue,
          },
        });
      }
    }
    return newFilters;
  };

  const handleReset = () => {};

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Box
          width={"100%"}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"flex-start"}
        >
          <Typography variant="h4">Create Data Filters</Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            alignItems: "start",
          }}
        >
          <Typography
            data-testid="p1"
            sx={{
              marginTop: 2,
              marginRight: 85,
              fontSize: "12.5px",
              color: "#7A7E8B",
              fontWeight: "bold",
            }}
            maxWidth="400px"
          >
            Select the columns of data you want to include in your query.
          </Typography>
          <Button
            style={{
              textTransform: "none",
              fontWeight: "bold",
              height: "35px",
              marginRight: "5px",
              width: "100px",
              border: "1px solid #C5C7D4",
            }}
            size="small"
            onClick={() => {
              ResetFilterValues();
            }}
          >
            Reset
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 2,
            display: "flex",
            flexDirection: "row",
          }}
        ></Box>

        <Divider />

        <Box
          // height="500"
          sx={{
            padding: "20px",
            border: "1px solid #C5C7D4",
            marginTop: 3,
            borderRadius: "8px",
            maxHeight: "350px",
            overflowY: "auto",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Create Filter
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="filterName"
                  label="Filter Name"
                  value={filterName}
                  onChange={(e) => handleInputChange("filterName", e)}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    "& .MuiInputBase-input": {
                      height: "8.5px",
                      // Adjust the height value as per your preference
                    },
                    "& label": {
                      fontSize: "15px",
                      textAlign: "center",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  name="filterDescription"
                  label="Description"
                  value={filterDescription}
                  onChange={(e) => handleInputChange("filterDescription", e)}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    "& .MuiInputBase-input": {
                      height: "8.5px",
                      // Adjust the height value as per your preference
                    },
                    "& label": {
                      fontSize: "15px",
                      textAlign: "center",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginTop: "8px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Data
            </Typography>
          </Box>
          {RepeaterRow()}
        </Box>

        <Box
          sx={{
            height: "30px",
          }}
        ></Box>
        <br />
        <Footer
          onClose={onClose}
          onRun={OnClickRun}
          onSave={() => {
            handleCreateFilterApi();
          }}
          isCreateFilter={loading}
        />
      </Box>
    </>
  );
};
export default CreateFilters;
