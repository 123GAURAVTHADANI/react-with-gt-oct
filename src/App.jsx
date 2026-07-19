import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// functional component!!
function App() {
  // hook
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");
  const handleBtnClick = () => {
    setCounter(counter + 1);
  };
  const handleToogleBtn = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  console.log("Inside App!!!", theme);
  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "#121212" : "#ffffff",
        color: theme == "light" ? "#ffffff" : "#121212",
      }}
    >
      <Header counter={counter} />
      <h1>Main Page</h1>
      <button onClick={handleBtnClick}>Increment</button>
      <button onClick={handleToogleBtn}>Toggle</button>
      <h4>{counter}</h4>
      <Footer />
    </div>
  );
}

export default App;
