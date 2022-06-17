import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./All-Pages/Home/Home";
import CheckOutBasket from "./All-Pages/CheckOut-Basket/CheckOutBasket";
import Error from "./All-Pages/Error-Page/Error";
import { useSelector } from "react-redux";
import { I18nProvider } from "./i18n/main";



const App = () => {
  //const lang = useSelector((state) => state.lang);

  return (
    <>
    <div className="app">
      {/* <I18nProvider locale={lang}> */}
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
        {/* </I18nProvider> */}
    </div>
    </>
  );
}

export default App;
