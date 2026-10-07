
import React from 'react';
import {Link , useForm , usePage} from '@inertiajs/react';



export default function Register() {
     const {flash} = usePage().props;
     const { data, setData, post } = useForm({
        name: '',
        email: '',
        password: '',
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register.submit', {
            name: data.name,
            email: data.email,
            password: data.password,
        }));
    }


    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d7e4e7]">
            {flash.success && <p className="text-green-500">{flash.success}</p>}
            {flash.error && <p className="text-red-500">{flash.error}</p>}
          

            <h1 className="text-4xl font-bold text-gray-800">Register</h1>
            <p className="mt-4 text-lg text-gray-600">Please fill out the form below to register.</p>

            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                     value={data.name} onChange={(e) => setData('name', e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                     value={data.email} onChange={(e) => setData('email', e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                     value={data.password} onChange={(e) => setData('password', e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info">Register</button>
            </form>
        </div>


    ); 
    
}
