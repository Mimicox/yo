<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Session;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class SingInController extends Controller
{
    //
	function index()
	{

		return view('signin');
	}



	function loginValidate(Request $request)
	{
		
		$name = $request->input('usuario');
		$password = $request->input('password');
		
		$results = DB::select('call loginValidate(?,?)', array($name,$password));

		
		Session::put('user',$results[0]->oIdUsuario);



		$json = json_encode($results);
		echo $json;

	}

}
