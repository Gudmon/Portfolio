import React from "react";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="max-w-5xl w-11/12 mx-auto">
      <Intro />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
