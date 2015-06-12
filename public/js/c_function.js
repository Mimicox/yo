
var appYo = angular.module('all', []);

appYo.controller('allbody', function ($scope,$http) {




$scope.c_getCursos = function()
{

var obj = {};
 
$http({

      url: '/c_getCursos',
      method: 'POST',
      data : obj,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {

        alert(data[1].nombre);


       }).error( function (data,status,headers,config){



      });


}


$(document).click(function(){

//$scope.c_getCursos();

});




});