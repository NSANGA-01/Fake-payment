import React from 'react';
import {Link , useForm , usePage} from '@inertiajs/react';

export default function ShowProduct({product}) {

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d7e4e7]">
            <img src={product.image} alt={product.name} className="w-40 h-40 rounded-md object-cover shrink-0" />
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-4 text-lg text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-green-500">${product.price.toFixed(2)}</p>
            <Link  className="btn btn-info mt-2 mr-1.5 " href={route('payments.index')} >Buy Now</Link>
            <Link className="btn btn-primary mt-4 ml-1.5" href={route('products.index')}>Back to Products</Link>
        </div>
    </>
    );
}
