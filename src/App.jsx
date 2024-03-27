import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Allproducts from "./Pages/AllProducts/Allproducts";
import Singleproduct from "./Pages/Singleproduct/Singleproduct";
import AllCategories from "./Pages/Categories/AllCategories";
import SingleCategory from "./Pages/Categories/SingleCategory";
import Users from "./Pages/Users/Users";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Allproducts />} />
        <Route path='/allcategories' element={<AllCategories />} />
        <Route path="/singlecategory/:categoryId" element={<SingleCategory />} />
        <Route path="/product/:id" element={<Singleproduct />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
