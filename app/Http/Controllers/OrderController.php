<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function placeOrder(Request $request) {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer',
            'user_id' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'delivery_address' => 'required|string|max:255',
            'ref' => 'required|string|max:255|unique:orders,ref',
            'date' => 'required|date',
            'status' => 'required|string|max:50',
        ]);

        $order = new Order();
        $order->product_id = $request->input('product_id');
        $order->quantity = $request->input('quantity');
        $order->user_id = $request->input('user_id');
        $order->name = $request->input('name');
        $order->email;
        $order->email = $request->input('email');
        $order->phone = $request->input('phone');
        $order->delivery_address = $request->input('delivery_address');
        $order->ref = $request->input('ref');
        $order->date = $request->input('date');
        $order->status = $request->input('status');
        $order->save();

        return redirect()->route('order.success');
    }

    public function success() {
        return Inertia::render('OrderSuccess');
    }
}
