import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Products() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "2rem", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item One" value="4" />
            <Tab label="Item Two" value="5" />
            <Tab label="Item Three" value="6" />
            <Tab label="Item One" value="7" />
            <Tab label="Item Two" value="8" />
            <Tab label="Item Three" value="9" />
            <Tab label="Item One" value="10" />
            <Tab label="Item Two" value="11" />
            <Tab label="Item Three" value="12" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item One</TabPanel>
        <TabPanel value="5">Item Two</TabPanel>
        <TabPanel value="6">Item Three</TabPanel>
        <TabPanel value="7">Item One</TabPanel>
        <TabPanel value="8">Item Two</TabPanel>
        <TabPanel value="9">Item Three</TabPanel>
        <TabPanel value="10">Item One</TabPanel>
        <TabPanel value="11">Item Two</TabPanel>
        <TabPanel value="12">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
