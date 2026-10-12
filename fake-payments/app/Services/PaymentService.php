<?php
namespace App\Services;


use App\Models\Payment;
use App\Models\Product;
use Illuminate\Validation\ValidationException;

use App\Jobs\SendVerificationCode;


class PaymentService
{
    public function createPayment(array $data): Payment
    {
    
    
      
    if(!isset($data['phone']) || !isset($data['name']) || !isset($data['amount']) || !isset($data['product_id'])) {
        throw ValidationException::withMessages([
            'payment' => ['Missing required payment data.']
        ]);
    }

    if(!isset($data['phone']) || !preg_match('/^\+?[1-9]\d{1,14}$/', $data['phone'])) {
        throw ValidationException::withMessages([
            'phone' => ['The phone number is invalid.']
        ]);
    }

     $product = Product::findOrFail($data['product_id']);
     $price = $product->price;
    
    if((float)$data['amount'] < (float)$price) {
        throw ValidationException::withMessages([
            'amount' => ['The payment amount does not match the product price.']
        ]);
    }

        return Payment::create(
            [   
                'product_id' => $data['product_id'],
                'name' => $data['name'],
                'phone' => $data['phone'],
                'amount' => $data['amount'],
            ]
            
        );
        
    }
}