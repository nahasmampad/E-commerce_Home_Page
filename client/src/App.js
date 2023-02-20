import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import LogedIn from "./Routes/LogedIn";
import Publick from "./Routes/PublicRote";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LogedIn />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<Publick />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
