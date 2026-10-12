<?php

namespace App\Jobs;

use App\Models\User;
use App\Models\Payment;
use App\Models\Product;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendVerificationCode implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(?User $user, ?Payment $payment = null, ?Product $product = null)

    {
        $this->user = $user;
        $this->payment = $payment;
        $this->product = $product;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //
        $user = $this->user;
        $payment = $this->payment;
        $product = $this->product;

        $message = "Hello {$user->name}, your verification code is 44444444444 for the payment of {$payment->amount} for the product {$product->name}.";
    
        sleep(5); // Simulate a delay for sending the message

        // Generate a message for the user
        
        dump($message); // For demonstration purposes, we just dump the message
    }
}   
