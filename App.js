import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Random from "./random";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Random />
      </main>
      <Footer />
    </div>
  );
}

export default App;
