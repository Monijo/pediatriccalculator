import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";



function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>






        </Routes>
      </BrowserRouter>
  );
}

export default App;
