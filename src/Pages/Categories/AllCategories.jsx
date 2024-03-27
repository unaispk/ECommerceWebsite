import React from 'react'
import Navbar from '../../Components/Navbar'
import CategoryItem from '../../Components/CategoryItem'

const AllCategories = () => {
    return (
        <>
            <Navbar />
            <div className="row justify-around mx-6 mb-8 mt-4 ">
                <div className=" col gap-8 ">
                    <CategoryItem />
                </div>
            </div>
        </>
    )
}

export default AllCategories
