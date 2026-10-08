<?php
namespace App\Services;

use App\Models\Payment;


class PaymentService
{
    public function createPayment(array $data): Payment
    {
        return Payment::create(
            [
                'name' => $data['name'],
                'phone' => $data['phone'],
                'amount' => $data['amount'],
            ]
        );
    }
}