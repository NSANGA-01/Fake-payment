<?php
namespace App\Services;

use App\Models\Payment;


class PaymentService
{
    public function createPayment(array $data): Payment
    {
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