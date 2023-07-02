import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Home from "./Components/Home";
import Update from "./Components/Update";
import Delete from "./Components/Deletecomponent";
import Header from "./Components/Header";
import Updateform from './Components/Updateform';
import Showdetails from './Components/Showdetails';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
        <Route path="/update/updateform/:id" element={<Updateform/>}/>
        <Route path="/delete" element={<Delete />} />
        <Route path="/showdetails" element={<Showdetails/>}/>
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    <Footer/>
  </div>
  )
}

export default App
