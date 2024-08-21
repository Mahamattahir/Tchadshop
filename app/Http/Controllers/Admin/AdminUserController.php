<?php
// app/Http/Controllers/Admin/AdminUserController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('UserList', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('Admin/CreateUser');
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Admin/EditUser', ['user' => $user]);
    }

    public function store(Request $request)
    {
        // Validation and storage logic here
    }

    public function update(Request $request, $id)
    {
        // Validation and update logic here
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();
        return redirect()->route('admin.users.index');
    }
}
