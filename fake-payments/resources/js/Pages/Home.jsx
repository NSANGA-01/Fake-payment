import React from 'react';
import {Link , useForm , usePage} from '@inertiajs/react';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d7e4e7] ">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Fake Payments</h1>
            <p className="mt-4 text-lg text-gray-600">This is a simple application to simulate payment processing.</p>
            <Link className="btn btn-info mt-6" href={route('register.submit')}>Get Started </Link>
        </div>
    );
}

export default Home;