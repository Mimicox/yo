<!DOCTYPE HTML>
<html ng-app="yes">
  <head>
    <title>Yancuic Ontli : Signin</title>
    <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
    <meta name="viewport" content="width=device-width, initial-scale=1">

       <link data-require="fancybox@2.1.4" data-semver="2.1.4" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.4/jquery.fancybox.css" />

    	 <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

      <script data-require="fancybox@2.1.4" data-semver="2.1.4" src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.4/jquery.fancybox.js"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
       <script src="/js/angular-route.js"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-resource.min.js"></script>
     
      
       
    <style>
    body{
    		background-image: url("/images/background/brushed.png");

    }

    #form-signin
    {
    	background-color:#ffffff;
    	border-radius: 10px;
    	margin-top:10px;
    	padding: 20px;
    	padding-bottom: 50px;
    }

    #logo
    {



    }



    </style>

 </head>
 <body ng-controller="signin">

<div class="container" >
	
	<div class="row">

		<div class="col-lg-4 col-lg-offset-4">
			<br><br><br>
			<form id="form-signin" method="post">
				<h4>Sign In</h4>
				<input type="text" class="form-control" placeholder="Username or Email" name="lUsuario" id="lUsuario"><br>
				<input type="password" class="form-control" placeholder="password" name="lPassword" id="lPassword"><br>
				<button class="btn btn-success col-md-12 " type="submit" >Sign in</button><br><br>
				<button class="btn btn-info col-md-12" fancybox ng-click="openFancyBox('signup')">Sign up</button>

				</form>
<br>
    

	</div>


</div>


 <script>
       	

 var app = angular.module('yes',['ngRoute']);

  app.directive('fancybox',['$compile', '$http',

     function($compile, $http)
     {

        return function($scope){

          $scope.openFancyBox = function(url)
          {


              $http.get(url).then(function(response){

             if(response.status == 200)
             {
               var template = angular.element(response.data);
               var compiledTemplate = $compile(template);

               $.fancybox.open({
                content: template,
                type : 'html'
               });

                compiledTemplate($scope);
                            
  $('#alert-failure').hide();

  $('#alert-succefull').hide();

             }

          });

        }


        }

     }

    ]);

app.controller('signin',function ($scope, $http) {


$('#form-signin').submit(function(){

var obj = {};
obj.usuario = $('#lUsuario').val();
obj.password = $('#lPassword').val();
if(obj.usuario.length > 3 && obj.password.length > 3)
{

$scope.loginValidate(obj);


return false;
}
else
{

return false;

}


});



$scope.singUpProcess = function ()
{

  var obj = {};

  obj.sName = $scope.sName;
  obj.sLastName = $scope.sLastName;
  obj.sUsername = $scope.sUsername
  obj.sPassword = $scope.sPassword;
  obj.sPasswordTwo = $scope.sPasswotTwo;
  obj.sGener = $scope.sGener;

 if($scope.sPassword == $scope.sPasswordTwo)
 {
  
    

 }

 $http({

  url: '/signup/signUpAccount',
  method: 'PUT',
  data: obj ,
  headers: {'Content-Type': 'application/json'}


 }).success( function ( data, status, headers, config){

 console.log(data);
 if(data[0]['value'] == 0)
 {

  $('#alert-failure').show();
  //parent.$.fancybox.close();



 }
 else
 {
  
  $('#alert-succefull').show();
  //parent.$.fancybox.close();
 }

 }).error( function ( data, status, headers, config){


 });;

}


$scope.loginValidate = function(obj)
{

$http({

  url: '/signin/loginValidate',
  method: 'PUT',
  data: obj ,
  headers: {'Content-Type': 'application/json'}

  }).success( function (data, status, headers, config){


console.log(data);
//io = io.connect('http://localhost:3000');  
 if(data[0]['oUsuario'] != null)
 {
   if(data[0]['oUsuario'].length > 2)
   {

    var neg = 0;
    
    // call the server-side function 'adduser' and send one parameter (value of prompt)
    //io.emit('addUser');
   

    if(neg == 0){
          window.location = '/profile';
      }
   }
  else
  {

    

  }
  }
  else
  {

  	console.log('no existe');

  }

  }).error( function (data, status, headers, config){



  });


}


});



       </script>


 </body>
 </html>