import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Code from "./pages/Code";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreatePassword from "./pages/CreatePassword";
import Password from "./pages/Password";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Password />} />
          <Route path="/otp-password" element={<Code />} />
          <Route path="/change-password" element={<CreatePassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
