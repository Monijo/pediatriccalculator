import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/addChild/AddChild";



function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addchild" element={<AddChild/>}/>






        </Routes>
      </BrowserRouter>
  );
}

export default App;
