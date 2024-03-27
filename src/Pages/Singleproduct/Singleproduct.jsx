import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar';

const Singleproduct = ({  addToCart }) => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

//   console.log(cartItem);

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                {product && (
                    <div className="container mx-auto">
                        <div className=" card card-compact w-90 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                            <figure>
                                <img alt="Product" src={product.images[0]} className="px-8 w-90 h-80 object-cover rounded-t" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl font-semibold mb-2 text-center">{product.title}</h2>
                                <h4 className="card-title text-xl font-semibold mb-2 text-center">$ {product.price}</h4>
                                <p className="card-title text-lg  mb-2 text-center">{product.description}</p>
                                <div className="card-actions flex justify-center">
                                    <button onClick={() => addToCart(product)}
                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Singleproduct;
