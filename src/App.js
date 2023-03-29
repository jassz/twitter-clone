import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Feed from "./components/Feed/feed";
import Widgets from "./components/Widgets/widgets";
import Explore from "./components/Explore/explore";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    // BEM
    <div className="app">
       {/* <React.Fragment> */}
      <Sidebar />
      <main className='container middle'>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/feed" />} /> */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </main>
      <Widgets />
    {/* </React.Fragment> */}
    </div>
  );
}

export default App;
