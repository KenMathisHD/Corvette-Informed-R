import "./styles/App.css";
import NavBar from "./components/common/navbar/navbar";
import Routes from "./components/routes";
import PageFooter from "./components/common/pagefooter/pagefooter";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(process.env.REACT_APP_EXPRESS_SERVER);

  function handleModeChange(boolean) {
    if (boolean === true) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <div className={darkMode ? "App darkMode" : "App lightMode"}>
      <NavBar onModeChange={handleModeChange}></NavBar>
      <Routes></Routes>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
