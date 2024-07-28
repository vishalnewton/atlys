import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import SvgIcon from "./Utils/SvgIcons";
import Homepage from "./Components/Homepage";

function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  return (
    <div className={`App ${isHomePage ? "" : "main-page"}`}>
      {isHomePage ? (
        <Homepage />
      ) : (
        <div className="not-logged-in">
          <SvgIcon iconname="logo" />
          <Login setIsHomePage={setIsHomePage} />
        </div>
      )}
    </div>
  );
}

export default App;
