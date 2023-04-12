import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { tabItems } from "../constants";
import Tabs from "@mui/material/Tabs";
import Trending from "./ProductsTabs/Trending";
import {
  DairyProducts,
  DryFruits,
  Flowers,
  Fruits,
  Grocery,
  LentilsPulses,
  NewArrivals,
  Nuts,
  OilsGhee,
  OrganicFlour,
  OrganicJuices,
  PicklesPastes,
  RiceWheat,
  Snacks,
  Spices,
  Vegetable,
} from "./ProductsTabs";
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

        <TabPanel value={1}>
          <Trending />
        </TabPanel>
        <TabPanel value={2}>
          <NewArrivals />
        </TabPanel>
        <TabPanel value={3}>
          <Vegetable />
        </TabPanel>
        <TabPanel value={4}>
          <Fruits />
        </TabPanel>
        <TabPanel value={5}>
          <Spices />
        </TabPanel>
        <TabPanel value={6}>
          <DairyProducts />
        </TabPanel>
        <TabPanel value={7}>
          <Nuts />
        </TabPanel>
        <TabPanel value={8}>
          <Flowers />
        </TabPanel>
        <TabPanel value={9}>
          <Grocery />
        </TabPanel>
        <TabPanel value={10}>
          <Snacks />
        </TabPanel>
        <TabPanel value={11}>
          <OrganicFlour />
        </TabPanel>
        <TabPanel value={12}>
          <PicklesPastes />
        </TabPanel>
        <TabPanel value={13}>
          <OilsGhee />
        </TabPanel>
        <TabPanel value={14}>
          <DryFruits />
        </TabPanel>
        <TabPanel value={15}>
          <LentilsPulses />
        </TabPanel>
        <TabPanel value={16}>
          <RiceWheat />
        </TabPanel>
        <TabPanel value={17}>
          <OrganicJuices />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
