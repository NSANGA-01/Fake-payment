
import React from 'react';
import {Link , useForm , usePage} from '@inertiajs/react';

export default function Login() {
     const {flash} = usePage().props;
     const { data, setData, post } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login.submit', {
            email: data.email,
            password: data.password,
        }));
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d7e4e7]">
            {flash.success && <p className="text-green-500">{flash.success}</p>}
            <h1 className="text-4xl font-bold text-gray-800">Login</h1>
            <p className="mt-4 text-lg text-gray-600">Please enter your credentials to log in.</p>

            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={data.name}
                    onChange={(e) => setData('email', e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info">Login</button>
            </form>
        </div>
    );
}
