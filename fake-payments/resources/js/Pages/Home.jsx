

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Fake Payments</h1>
            <p className="mt-4 text-lg text-gray-600">This is a simple application to simulate payment processing.</p>
            <button className="btn btn-info mt-6">Get Started</button>
        </div>
    );
}

export default Home;