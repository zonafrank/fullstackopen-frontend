import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Page from "./components/Page";
import "./App.css";

const App = () => {
  const [selectedApp, setSelectedApp] = useState("notes");

  return (
    <>
      <Header />
      <main className="main">
        <div className="sidebar">
          <Sidebar handleSelection={(val) => setSelectedApp(val)} />
        </div>
        <div className="page">
          <Page selectedApp={selectedApp} />
        </div>
      </main>
    </>
  );
};

export default App;
