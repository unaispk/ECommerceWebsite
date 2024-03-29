import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryItem = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories').then((res) => {
            console.log(res.data);
            setCategories(res.data.slice(0, 5));
        });
    }, []);

    return (
        <>
            <div className="flex flex-wrap mt-24">
                {categories &&
                    categories.map((category, key) => (
                        <div key={category.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">

                            <Link to={`/singlecategory/${category.id}`}>
                                <div className="text-center card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                                    <figure>
                                        <img alt="image" src={category.image} className="w-full h-60 object-cover" />
                                    </figure>
                                    <div className="card-body p-4">
                                        <h2 className="card-title text-xl font-semibold mb-2">{category.name}</h2>

                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>

        </>
    )
}

export default CategoryItem
