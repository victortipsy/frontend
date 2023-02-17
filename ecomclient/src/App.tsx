import React from "react";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Footer from "./Components/footer/footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <AllRoutes />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
