<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WebAppController extends Controller
{
    public function index()
    {
        return view('app');
    }
}
