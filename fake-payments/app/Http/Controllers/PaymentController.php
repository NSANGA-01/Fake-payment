<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Payment;
use App\Http\Requests\StorePaymentRequest;
use App\Http\Requests\UpdatePaymentRequest;
use App\Services\ProductService;
use App\Services\PaymentService;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return inertia('PaymentForm' );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Product $product)
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaymentRequest $request)
    {
        //
        $validated = $request->validated();
        $paymentService = new PaymentService();
        $payment = $paymentService->createPayment($validated);
        
        return redirect()->route('products.show', $payment->product_id)->with('success', 'Payment created successfully.');

    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaymentRequest $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
