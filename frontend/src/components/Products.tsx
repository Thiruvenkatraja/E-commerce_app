import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { tabItems } from "../constants";
import Tabs from "@mui/material/Tabs";
import Trending from "./ProductsTabs/Trending";
export default function Products() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ padding: "2rem", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              "& .css-1aquho2-MuiTabs-indicator": {
                width: 0,
              },
            }}
          >
            {tabItems.map((items) => (
              <Tab label={items.label} value={items.value} />
            ))}
          </Tabs>
        </Box>
        {tabItems.map((items) => (
          <TabPanel value={items.value}>
            <Trending />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
