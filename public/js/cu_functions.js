var appYo = angular.module('all', []);

appYo.controller('allbody', function ($scope,$http) {

     var counter = 0;

$scope.idAlumno = $('.perfilAmigo').attr('id');

$scope.getProgresaCuatrimestral = function(){

var obj = {};

obj.id = $scope.idAlumno;

$http({

      url: '/c_puntosRamas',
      method: 'POST',
      data : obj,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {



        var ramas = data[data.length -1 ].oRamas;
        var title = ((data.length -1) / ramas);
        
        var objetos = new Array();

        var datos = new Array();
       
        var nombre = new Array((data.length-1)/ramas);
        var totales = new Array(ramas);

  
        var estatic = 0;
      



for(var t =0; t < (data.length -1) / ramas; t++)
      
        {

  

          nombre[t] = data[t*3].nombre;


        }
        
      
      ////////////////////////// SEGUNDO FOR ////////////////////////


for(var j = 0; j< 3; j++)
{



totales[j] = [(data[counter].total +0),(data[counter+=1].total+0),(data[counter+=1].total+0)];

counter += 1;

}
      
         /*

              
totales[0] = [90,0,0];

totales[1] = [0,0,0];

totales[2] = [25,0,0];


console.log([(data[0].total +0),(data[1].total +0)]);    
     */       

 for(var i = 0; i < ramas ; i++){
   


////////// PUSH DATA ////////////////
      datos = {

        'name' : nombre[i],
        'data' : totales[i]

      }

      objetos.push(datos);


    
    }


console.log(objetos)



      // totales.push(data.total);


         /*
    for(var j = 0; j < ramas; j++)
   {
       
     //console.log(data[j].total);

 
        var datos = {

          "name" : data[i].nombre,
          "data" : [data[i].total + 0,data[i].total + 0,data[i].total + 0]
        };

        objetos.push(datos);

  }

        */



  




 

        $('#grafica').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Record y progreso mensual'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Enero-Abril', 'Mayo-Agosto', 'Septiembre-Diciembre'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' Puntos'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 10,
                y: 110,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: 
           objetos
/*
            [
            

  
              {

                name: 'ciencia',
                data: [1500, 31, 635]
                
            }, {
                name: 'Year 1900',
                data: [133, 156, 947]
            }, {
                name: 'Year 2008',
                data: [973, 914, 2000]
            }

            
            ]
            */

            
        });

}).error( function (data,status,headers,config){


  console.log(status);


  });
}


/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////// OBTENCIÓN DE RAMAS //////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


$scope.c_getRamas = function()
{

var obj = {};
obj.id = $scope.idAlumno;
 
$http({

      url: '/c_getRamas',
      method: 'POST',
      data : obj,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
        var indiceCursos = (data.length / 2);
        
        for(var i=0; i < (data.length / 2); i++)
        {
          
          $('#content-suscripciones').append("<div class='col-md-8' style='margin-left:16px;margin-top:5px;'><div class='col-md-8'><span style='color:#6f6f6f;'>"+data[i].nombre+"</span></div> <div class='col-md-4'><span style='margin-left:95px; color:#9e9e9e;'>"+data[indiceCursos].count+"</span></div></div>");
      indiceCursos += 1;
        }


       }).error( function (data,status,headers,config){

       console.log(status);

      });


}



$scope.getUserAmigos = function()
{

var object = {};


$http({

      url: '/getAmigos',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
          for(var i  = 0; i< data.length; i++){
            
            $('#contenedorAmigos').append('<div id="'+data[i].idamigo+'" style="cursor:pointer;" class=" col-md-2 friends"><img src="/images/'+data[i].imagen+'" width="50px" height="50px"/>'+data[i].nombre+'</div>');
            
            }

          $('.friends').click(function()
            {

              window.location = '/perfil/' + $(this).attr('id');

            });
      }).error( function (data,status,headers,config){



      });


}


$scope.getUserAmigos();

$scope.c_getRamas();

$scope.getProgresaCuatrimestral();









});