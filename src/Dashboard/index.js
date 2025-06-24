import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './style.scss';
import Navbar from "./navbar";
import Home from "./home";

const Dashboard = () => {

  return (
    <div className="App">
      <div className="dashboard-wrapper">
        <Navbar />
        <div className="dashboard-content">
          <Routes>
            <Route exact path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </div >
  )
}

export default Dashboard;