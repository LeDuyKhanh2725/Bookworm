<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserControllers extends Controller
{
    public function User()
        {
            return response()->json([
                'data' => User::all(),
            ]);
        }

    public function getFullNameUser($id)
    {
        $user = User::find($id)->full_name;
        return $user;
    }
}
