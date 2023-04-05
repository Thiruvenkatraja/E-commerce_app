import "./App.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
import  Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
          {/* <Home /> */}
          {/* <Products/> */}
          <Login/>
    </div>
  );
}

export default App;
