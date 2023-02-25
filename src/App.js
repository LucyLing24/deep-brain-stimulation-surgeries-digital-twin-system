import './App.css';
import React, { useState, useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import ModelConstruct from "./Pages/ModelConstruct";
import ModelView from "./Pages/ModelView";
import OperationDesign from "./Pages/OperationDesign";
import DataList from "./Pages/DataList";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/datalist" element={<DataList />} />
            <Route path="/modelconstruct" element={<ModelConstruct />} />
            <Route path="/modelview" element={<ModelView />} />
            <Route path="/operation" element={<OperationDesign />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
