<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    //


    function index()
    {

    	return view('profile',['user' => 'Luis Manolo']);

    }






}
