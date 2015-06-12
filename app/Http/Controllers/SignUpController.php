<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class SignUpController extends Controller
{
    //

	function index()
	{

			return view('signup');
	}



	function signUpAccount(Request $request)
	{

		$name = $request->input('sName');
		$lastName = $request->input('sLastName');
		$username = $request->input('sUsername');
		$password = $request->input('sPassword');
		$gener = $request->input('sGener');
		$value = array();

		$result = DB::select('select usuario from u_usuarios where usuario = ?',array($username));
		if(sizeof($result) > 0)
		{
			
			$value[0]['value'] = 0;
		}
		else
		{
			
		$results = DB::select('call u_registerUser(?,?,?,?,?)', array($username,$password,$gener,$name,$lastName));

		if($results)
		{
			$value[0]['value'] = 1;

		}

		}

		$rs = json_encode($value);

		echo $rs;


	}

}
