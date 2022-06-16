import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./All-Pages/Home/Home";
import CheckOutBasket from "./All-Pages/CheckOut-Basket/CheckOutBasket";
import Error from "./All-Pages/Error-Page/Error";


const App = () => {

  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route 
              path="/basket"
              element={<CheckOutBasket/>}
            />
            <Route path="*" element={<Error/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
