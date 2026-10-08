
function PaymentForm(){

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#d7e4e7]">
            <h1 className="text-4xl font-bold text-gray-800">Payment Form</h1>
            <form className="mt-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input type="text" id="phone" name="phone" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
                    <input type="number" id="amount" name="amount" className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <button type="submit" className="btn btn-info">Process Payment</button>
            </form>


        </div>
        </>
    )
}

export default PaymentForm;