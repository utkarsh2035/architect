import React from "react";
import ImageSlider from "./components/ImageSlider";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Cursor />
      <ImageSlider />
      <Footer/>
    </div>
  );
}

export default App;
