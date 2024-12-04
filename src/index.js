
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";



function App() {
 
 
  return(
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact></Contact>}/>


      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )


}


var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);

