import axios from "axios";

export const FruitsList = () => {
  axios.get("https://fruityvice.com/api/fruit/all").then((res) => {
    console.log("res", res.data);
  });
};

 
