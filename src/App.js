import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from './pages/Landingpage';
import Post from "./pages/Post";
import Header from "./components/Header";
import Footer from "./components/Footer";





function App() {
  
  return (
    <div className="App">
      <div className="App-div">
      <Header/>
        <Routes>
          <Route path="/" element= {<Landingpage />}/>
          <Route path="post/:id" element={<Post />} />  
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
