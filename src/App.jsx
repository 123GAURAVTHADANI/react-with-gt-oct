import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// functional component!!
function App() {
  // hook
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");
  const [apiData, setApiData] = useState([]);
  const handleBtnClick = () => {
    setCounter(counter + 1);
  };

  const handleToogleBtn = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  console.log("Inside App!!!", theme);

  // updating!!!
  useEffect(() => {
    async function handleDataFetch() {
      const response = await fetch("https://dummyjson.com/products");
      const json_data = await response.json();
      setApiData(json_data);
    }
    handleDataFetch();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "#121212" : "#ffffff",
        color: theme == "light" ? "#ffffff" : "#121212",
      }}
    >
      <Header counter={counter} />
      <h1 className="header">Main Page</h1>
      <button onClick={handleBtnClick}>Increment</button>
      <button onClick={handleToogleBtn}>Toggle</button>
      <h4>{counter}</h4>
      <ul>
        {apiData?.products?.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
      <Footer />
    </div>
  );
}

export default App;

// rendering // mounting !!!
