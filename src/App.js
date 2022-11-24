import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import {theme} from "./theme"
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./GlobalStyle"
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {

  return <div>
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        
      </Routes>
      <Footer/>
    </Router> 
    
    </ThemeProvider>
  </div>;
};

export default App;
