import React from 'react'
import Product from '../../Components/Product/Product'
import Navbar from '../../Components/Navbar'


const Allproducts = () => {
  return (
    <>   
          <Navbar />
          <div className="row justify-around mx-6 mb-8 mt-4 ">
              <div className=" col gap-8 ">
                  <Product />
              </div>
          </div>
    </>
  )
}

export default Allproducts
