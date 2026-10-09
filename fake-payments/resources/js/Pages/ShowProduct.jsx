import React from 'react';
import {Link , useForm , usePage} from '@inertiajs/react';

export default function ShowProduct({product}) {

    const {flash} = usePage().props;
    const { data, setData, post } = useForm({

        product_id: product.id,
        name: '',
        phone: '',
        amount: ''
       
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('payments.store', {
            product_id: data.product_id,
            name: data.name,
            phone: data.phone,
            amount: data.amount,
        }));
    }

    return (
        <>
      
       <div className="min-h-screen flex items-center justify-center bg-[#d7e4e7]">
        <div>
        {flash.success && <p className="text-green-500 text-sm border-2 border-green-500">{flash.success}</p>}
        {flash.error && <p className="text-red-500 text-sm border-2 border-red-500">{flash.error}</p>} 
        </div>
        <div className="flex items-center justify-center gap-6">

        <div className="flex flex-col ">
            <img src={product.image} alt={product.name} className="w-40 h-40 rounded-md object-cover shrink-0" />
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-4 text-lg text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-green-500">${product.price.toFixed(2)}</p>
            <Link className="btn btn-primary mt-4 ml-1.5" href={route('products.index')}>Back to Products</Link>
        </div>
        
            <div className="flex flex-col ">
            <h1 className="text-4xl font-bold text-gray-800">Payment Form</h1>
            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <input type="hidden" name="product_id" value={product.id} />
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                    placeholder="Enter your name" 
                    value={data.name} onChange={(e) => setData('name', e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input type="text" id="phone" name="phone" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                     placeholder="Enter your phone number" 
                     value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
                    <input type="number" id="amount" name="amount" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                     placeholder="Enter the amount" 
                     value={data.amount} onChange={(e) => setData('amount', e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info">Process Payment</button>
            </form>
        </div>
 
        </div>
        </div>
    </>
    );
}
