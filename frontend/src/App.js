import "./App.css";
import { Routes, Route } from "react-router-dom";
import Leftbar from "./Components/Sidebar/Sidebar.tsx";
import SignUp from "./Components/Login/Register.tsx";
import LogIn from "./Components/Login/Login.tsx";
import PForm from "./Components/ProductForm/Pform.tsx";

function App() {
  return (
    <div className="App">
      <Leftbar />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/pform" element={<PForm/>} />
      </Routes>
    </div>
  );
}

export default App;
