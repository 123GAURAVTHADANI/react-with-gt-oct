import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// functional component!!
function App() {
  return (
    <div>
      <Header name="Lopa" age="21" />
      <h1>Main Page</h1>
      <Footer />
    </div>
  );
}

export default App;
