<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserControllers extends Controller
{
    public function index()
        {
            return response()->json([
                'data' => User::all(),
            ]);
        }
}
