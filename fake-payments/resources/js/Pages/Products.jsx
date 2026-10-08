
import React from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Products({products}) {
    const { flash } = usePage().props;

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d7e4e7]">
            <h1 className="text-4xl font-bold text-gray-800">Products</h1>
            <p className="mt-4 text-lg text-gray-600">Welcome to the products page. You are logged in!</p>
            <p className="mt-4 text-lg text-gray-600">Here are the products:</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={product.image} alt={product.name} className="w-25 h-25 rounded-md object-cover shrink-0" />
                        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-lg font-bold text-green-500">${product.price.toFixed(2)}</p>
                        <Link  className="btn btn-info mt-2 mr-1.5 " href={route('products.show',product.id)} >Buy Now</Link>
                        <Link className="btn btn-primary mt-2 ml-1.5" href={route('products.show',product.id)}>View</Link>
                    </div>
                ))}
            </div>
        </div>
    </>
    );


}