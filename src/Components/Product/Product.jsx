import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
            console.log(res.data);
            setProducts(res.data.slice(0, 50));
        });
    }, []);

    const handleClick = (product) => {
        console.log(product.title)
    }

    return (
        <>
            <div className="flex flex-wrap mt-24">
                {products &&
                    products.map((product, key) => (
                        <div key={key} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                            
                            <Link to={`/product/${product.id}`}>
                            <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                                <figure>
                                    <img alt="image" src={product.images[0]} className="w-full h-60 object-cover" />
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-xl font-semibold mb-2">{product.title}</h2>
                                    <h4 className="card-title text-xl font-semibold mb-2 text-center">$ {product.price} </h4>
                                    <div className="card-actions flex justify-center">
                                        <button onClick={() => handleClick(product)}
                                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Product;