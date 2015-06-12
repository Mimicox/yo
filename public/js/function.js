
 
var appYo = angular.module('all',  ['ui.bootstrap', 'ngCookies','ngRoute']);


appYo.directive('loading', function () {
    return {
        restrict: 'AE',
        replace: 'false',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    }
});



appYo.controller('MasterCtrl', function($scope, $cookieStore,$http) {


  $('[data-toggle="tooltip"]').tooltip(); 
 

  // Postiong comment perfil

  $scope.postComment = function()
  {
    var pComment = $('#post_comment').val();

    $http({
      url:'/postComment',
      method: 'POST',
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).success( function (data,status,config,headers) {

       for(var i = 0; i < data.length; i++)
       {
        $('#listRamas').append('<li><a href="">'+data[i]['nombre']+'</a></li>');
       }
    }).error( function (data,status,config,headers){


    });

  }
  



  ///



    /**
     * Sidebar Toggle & Cookie Control
     *
     */
    function getAllRamas()
    {
    $http({
      url:'/getAllRamas',
      method: 'GET',
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).success( function (data,status,config,headers) {

       for(var i = 0; i < data.length; i++)
       {
        $('#listRamas').append('<li><a href="">'+data[i]['nombre']+'</a></li>');
       }
    }).error( function (data,status,config,headers){


    });
}


getAllRamas();
   $('#listPerfil').children( 'ul').hide();  
   $('#listPerfil').click(function(){

    $('#listPerfil').children('ul').show();  
   });
     
    var mobileView = 992;

    $scope.getWidth = function() { return window.innerWidth; };

    $scope.$watch($scope.getWidth, function(newValue, oldValue)
    {
        if(newValue >= mobileView)
        {
            if(angular.isDefined($cookieStore.get('toggle')))
            {
                if($cookieStore.get('toggle') == false)
                {
                    $scope.toggle = false;
                }            
                else
                {
                    $scope.toggle = true;
                }
            }
            else 
            {
                $scope.toggle = true;
            }
        }
        else
        {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() 
    {
        $scope.toggle = ! $scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() { $scope.$apply(); };
});

/**
 * Alerts Controller
 */
appYo.controller('AlertsCtrl', function($scope) {
    $scope.alerts = [
        //{ type: 'success', msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!' },
       // { type: 'danger', msg: 'Found a bug? Create an issue with as many details as you can.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

appYo.controller('allAvancesPerfil',function ($scope,$http){



$scope.u_statsPerfil = function()
{
Morris.Bar({
  element: 'stats_donut',
  data: [
    { y: 'Ciencia & Tecnologia', a: 300, b: 0},
    { y: 'Literatura', a: 75,  b: 65 },
    { y: 'Salud', a: 50,  b: 40 },
 
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Respuestas Correctas', 'Respuestas Incorrectas']
});

}

$scope.u_statsPerfil();


$scope.statusPerfil = function()
{


$http({

  url:'',
  method:'',
  data:'',
  headers:{'Content-Type':'application/json; charset=utf-8'}


}).success(function (data,status,config,headers){

  Morris.Bar({
  element: 'stats_donut',
  data: [
    { y: 'Ciencia & Tecnologia', a: 100, b: 0, },
    { y: 'Literatura', a: 75,  b: 65 },
    { y: 'Salud', a: 50,  b: 40 },
 
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Respuestas Correctas', 'Respuestas Incorrectas']
});



}).error( function (data,status,config,headers)
  {



  });


}




$scope.u_avancesDataPerfil = function()
{


var object = {};

object.idAmigoAvance = $('.idAmigoAvance').attr('id');

$http({

  url:'/u_spGetAvancesPefil',
  method:'POST',
  data: object,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){


var userOne = [];
var userTwo = [];

for(var i = 2; i < data.length; i++)
{

if(data[0]['id_alumno'] == data[i]['id_alumno'])
  
{

  userOne.push((data[i]['puntos'] * -1));

}
else
{
    userTwo.push(data[i]['puntos'] );

}

}




$(function () {
    var chart,
        categories = ['Ciencia & Tecnologia','Literatura','Arte',];
  
    $(document).ready(function() {
        $('#grafica_usuario_perfil').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Comparasión de avance'
            },
            subtitle: {
                text: 'Yancuic Ontli'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function(){
   
                        return (Math.abs(this.value)) + '';

                    }
                },
                min: -3000,
                max: 3000
            },
    
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
    
            tooltip: {
                formatter: function(){
                    return '<b>'+ this.series.name +', en '+ this.point.category +'</b><br/>'+
                        'Puntos: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
    
            series: [{
                name: data[0]['nomcom'],
                data: userOne
            }, {
                name: data[1]['nomcom'],
                data: userTwo
            }]
        });
    });
    
});


//////////


}).error( function (data,status,config,headers){



});


}

$scope.u_avancesDataPerfil();




});


/*
appYo.controller('perfil-post', function ( $scope, $http ){






} );

*/

appYo.controller('dash-productos',function ($scope, $http){

  


});


appYo.controller('cursos-masivos', function ( $scope, $http )
  {


    $('.btns_sliders').attr('disabled','disabled');


    $scope.getCursosMasivos = function()
    {

      $http({
      url: '/getCursosMasivos',
      method: 'GET',
      headers:{'Content-Type':'application/json; charset=utf-8'}


    }).success( function (data,status,config,headers)
    {
      //Cursos recomendados..
      for(var x = 0; x < data[0].length; x++)
      {

        $('#cursos_recomendados').append('<li>'+
              '<div class="contenedor-curso">'+
               '<img src="/images/curso-php.jpg" width="218">'+

              '<div class="contenedor-titulo">'+
                 '<span class="titulo-curso" style="font-size:0.9em;"><b>'+data[0][x]['curso']+'</b></span>'+
              '</div>'+
              '<hr>'+
              '<div class="contenedor-datos">'+
                  '<table class="table">'+
                    '<thead><th align="center">Puntos</th><th>Progreso</th><th>Estudiantes</th></thead>'+
                    '<tbody style="font-size:13px;"><tr><td style="color:#27ae60;">300</td><td>'+

                      '<div class="progress">'+
                       '<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" >'+
                         '<span class="sr-only">60% Complete</span>'+
                       '</div>'+
                      '</div>'+


                     '</td><td>999</td></tr></tbody>'+
                  '</table>'+
              '</div>'+

              '</div>'+
            '</li>');
    //$('.contenedor-curso').css('box-shadow', '0px 4px 2px -2px gray');
      }
 for(var x = 0; x < data[1].length; x++)
      {

        $('#cursos_recientes').append('<li>'+
              '<div class="contenedor-curso">'+
               '<img src="/images/curso-php.jpg" width="218">'+

              '<div class="contenedor-titulo">'+
                 '<span class="titulo-curso" style="font-size:0.9em;"><b>'+data[1][x]['curso']+'</b></span>'+
              '</div>'+
              '<hr>'+
              '<div class="contenedor-datos">'+
                  '<table class="table">'+
                    '<thead><th align="center">Puntos</th><th>Progreso</th><th>Estudiantes</th></thead>'+
                    '<tbody style="font-size:13px;"><tr><td style="color:#27ae60;">300</td><td>'+

                      '<div class="progress">'+
                       '<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" >'+
                         '<span class="sr-only">60% Complete</span>'+
                       '</div>'+
                      '</div>'+


                     '</td><td>999</td></tr></tbody>'+
                  '</table>'+
              '</div>'+

              '</div>'+
            '</li>');
    //$('.contenedor-curso').css('box-shadow', '0px 4px 2px -2px gray');
      }


 



    }).error( function (data,status,config,headers)
    {
      console.log(status);

    });

    }

 console.log('asd');

    $scope.getCursosMasivos();

    

  });


appYo.controller('allDashCursos', function ($scope,$http)
  {






$scope.getUnidadesByTeacherActives = function(idCurso)
{

var obj = {};
obj.idCurso = idCurso;
$http({
  url:'/getUnidadesCursoTeacher',
  method:'POST',
  data:obj,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

  $('#setUnidadesTeacherBody').empty();


  for(var i = 0; i< data.length; i++)
  {
    var descriptionLimit = data[i]['descripcion'];
    if(descriptionLimit.length > 150)
    {
      descriptionLimit = descriptionLimit.substring(0,150) + '...';
    }

    if(data[i]['estatus'] == 'IN')
    {

     $('#setUnidadesTeacherBody').append('<tr><td>Unidad 1</td><td>'+data[i]['nombre']+'</td><td><button class="btn btn-default"><i class="ion-edit"></i></button></td><td><button class="btn btn-default"><i class="ion-close"></i></button></td></tr>');
    }


    if(data[i]['estatus'] == 'AC')
    {

     $('#setUnidadesTeacherBody').append('<tr><td>Unidad 1</td><td>'+data[i]['nombre']+'</td><td><button class="btn btn-default"><i class="ion-edit"></i></button></td><td><button class="btn btn-default"><i class="ion-close"></i></button></td></tr>');

    }

  }
}).error(function (data,status,config,headers){


});

}


$scope.getCursosByTeacherActives = function()
{


$http({

  url:'/getCursosTeacher',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

  for(var i = 0; i< data.length; i++)
  {
    var descriptionLimit = data[i]['descripcion'];
    if(descriptionLimit.length > 150)
    {
      descriptionLimit = descriptionLimit.substring(0,150) + '...';


    }

    if(data[i]['unidades'] == null)
      {

        data[i]['unidades'] = 0 ;
      }

    if(data[i]['estatus'] == 'IN')
    {

     $('#setCursosTeacher').append('<tr class="cursosTeacherAdmin" id="'+data[i]['id_curso']+'"><td>'+data[i]['nombreCurso']+'</td><td>'+data[i]['nombre']+'</td><td>'+data[i]['unidades']+'</td><td style="color:red;">'+data[i]['estatus']+'</td></tr>');
    }


    if(data[i]['estatus'] == 'AC')
    {

     $('#setCursosTeacher').append('<tr class="cursosTeacherAdmin" id="'+data[i]['id_curso']+'"><td>'+data[i]['nombreCurso']+'</td><td>'+data[i]['nombre']+'</td><td>'+data[i]['unidades']+'</td><td style="color:green;">'+data[i]['estatus']+'</td></tr>');
    }

  }



$('.cursosTeacherAdmin').click(function(){



 $('#setUnidadesTeacherBody').html('<span class="ion-loading-c" style="text-align:center; font-size:40px; margin-left:250px;margin-top:30%;"> </span>');
var idCurso = $(this).attr('id');

$scope.getUnidadesByTeacherActives(idCurso);

});


}).error(function (data,status,config,headers){


});
}



$scope.getCursosByTeacherActives();



var nomCurso;

  $('#btnNuevoCurso').click(function(){

    window.location = '/dashboard/cursos/nuevo/';

  });      



$scope.getCursosByTeacher = function()
{


$http({

  url:'/c_spGetCursos',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

  for(var i = 0; i< data.length; i++)
  {
    var descriptionLimit = data[i]['descripcion'];
    if(descriptionLimit.length > 150)
    {
      descriptionLimit = descriptionLimit.substring(0,150) + '...';


    }

    $('#cursosMaestro').append('<div class="cursosTeacher"><div class="thumbnail"><div class="contentImageCurso"><img src="/images/yo.jpg" alt="..." width="100%" height="100%"></div><div class="caption contenedorTexto"><h3 class="tituloCurso">'+data[i]['nombre']+'</h3>'+descriptionLimit+'<p><button class="btn btn-default" role="button"><span class="glyphicon glyphicon-eye-open"></span> Ver curso..</button> <button class="btn btn-danger" role="button"><span class="glyphicon glyphicon-trash"></span> Eliminar</button></p> </div></div></div>');
  }
}).error(function (data,status,config,headers){



});




}


$scope.getCursosByTeacher();



/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

var countNuevoCurso = 0;
var countCambioCurso = 0;
var countCambioUnidad = 0;

$('#nuevoCurso').hide();
$('#addCurso').hide();
$('#barraAddCurso').hide();
$('#selectCursos').hide();
$('#nuevaUnidad').hide();
$('#addUnidad').hide();
$('#barraAddUnidad').hide();
$('#optionRamas').hide();
$('#optionMaterias').hide();
$('#nuevoCursoDescription').hide();
$('#nuevaUnidadDescription').hide();


$scope.uc_insertUnidad  = function(iCurso,iDescription,iNombreUnidad)
{

   var object = {};

   iDescription = iDescription.replace(/\n/g, "</br>");

  object.curso = iCurso;
  object.description = iDescription;
  object.nombreUnidad = iNombreUnidad;

 
$http({

  url:'/uc_spInsertUnidad',
  method:'POST',
  data:object,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (datos,status,config,headers){
var arbol = {};


var curso = 'la';//datos[0]['id_curso'];

arbol.curso = curso;

arbol.children = datos;




$('#vistaGraficaCurso').empty();

  function getData(data,nombre)
  {



    var canvas = d3.select('#vistaGraficaCurso').append('svg')
              .attr('width',600)
              .attr('height',500)
              .append('g')
              .attr('transform','translate(50,50)')

  var tree = d3.layout.tree()
             .size([400,300]);

    //d3.json(data,function(data){

      var nodes = tree.nodes(data);
      var links = tree.links(nodes);

      var node = canvas.selectAll(".node")
                  .data(nodes)
                  .enter()
                  .append('g')
                  .attr("class","node")
                  .attr('transform',function (d) { return 'translate('+d.x+','+d.y+')';});

      node.append('circle')
        
           .attr('r',12)
           .attr('fill','#1abc9c');
   

          
          /*node.append('text')
              .text(function (d) {return d.name});
*/

          var diagonal = d3.svg.diagonal();

          canvas.selectAll(".link")
              
                .data(links)
                .enter()
                .append("path")
                .attr('class',"link")
                .attr('fill','none')
                .attr('stroke','#ADADAD')
                .attr('d',diagonal)
            
      

   // });        

  }

 getData(arbol);





}).error(function (data,status,config,headers){

 

});


}


$scope.c_spGetCursos = function()
{


$http({

  url:'/c_spGetCursos',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

  for(var i = 0; i< data.length; i++)
  {
    $('#selectCursos').append('<option value="'+data[i]['id_curso']+'">'+data[i]['nombre']+'</option>');
  }
}).error(function (data,status,config,headers){



});


}

$scope.insertModulo = function()
{


$http({

  url:'/uc_spInsertModulo',
  method:'POST',
  data:object,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

}).error( function (data,status,config,headers){



});


}


 $scope.insertCurso = function(iCurso,iDescription,idMateria)
 {


   iDescription = iDescription.replace(/\n/g, "</br>");

  var object = {};
  object.curso = iCurso;
  object.description = iDescription;
  object.idMateria = idMateria;

$http({

  url:'/uc_spInsertCurso',
  method:'POST',
  data:object,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

  nomCurso = data[0]['curso'];

  function getData(data)
  {


    var canvas = d3.select('#vistaGraficaCurso').append('svg')
              .attr('width',500)
              .attr('height',500)
              .append('g')
              .attr('transform','translate(50,50)')

  var tree = d3.layout.tree()
             .size([400,400]);

    //d3.json(data,function(data){

      var nodes = tree.nodes(data);
      var links = tree.links(nodes);

      var node = canvas.selectAll(".node")
                  .data(nodes)
                  .enter()
                  .append('g')
                  .attr("class","node")
                  .attr('transform',function (d) { return 'translate('+d.x+','+d.y+')';});

      node.append('circle')
           .attr('r',15)
           .attr('fill','#1abc9c');

          
          /*node.append('text')
              .text(function (d) {return d.name});
*/

          var diagonal = d3.svg.diagonal();

          canvas.selectAll(".link")
                .data(links)
                .enter()
                .append("path")
                .attr('class',"link")
                .attr('fill','none')
                .attr('stroke','#ADADAD')
                .attr('d',diagonal);
      

   // });        

  }

 getData(data);



}).error(function (data,status,config,headers){

 

});





 }



$scope.c_getMateriasByRama = function(iIdRama)
{
var object = {};
object.iIdRama = iIdRama;

$http({

  url:'/c_getMateriasByRama',
  method:'POST',
  data:object,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){
$('#optionMaterias').empty();

for(var i = 0; i < data.length; i++)
{

$('#optionMaterias').append('<option value="'+data[i]['id_materia']+'">'+data[i]['nombre']+'</option>');

}

}).error(function (data,status,config,headers){



});

}


$scope.c_getAllRamas = function()
{

$http({

  url:'/c_getAllRamas',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,config,headers){

for(var i = 0; i < data.length; i++)
{


$('#optionRamas').append('<option value="'+data[i]['id_rama']+'">'+data[i]['nombre']+'</option>');
}

}).error(function (data,status,config,headers){



});

}

$('#btnMakeNuevoCurso').click(function(){

if(countNuevoCurso == 0)
{

$('#optionRamas').show();
$('#optionMaterias').show();
$('#nuevoCursoDescription').show();
$scope.c_getAllRamas();


$('#optionRamas').change(function(){
  var id = $(this).val();
  console.log(id);

   $scope.c_getMateriasByRama(id);


});

console.log(countNuevoCurso);

$('#nuevoCurso').show();

$('#nuevoCurso').bind('change keypress', function(){

var tamanoCurso = $(this).val();

if(tamanoCurso.length > 0 && countCambioCurso == 1)
{
  $('#addCurso').show();

  }

  countCambioCurso += 1;

});

$('#addCurso').click(function()
  {

    $('#barraAddCurso').show();
    $('#addCurso').addClass('disabled')

    var curso = $('#nuevoCurso').val();
    var description = $('#nuevoCursoDescription').val();
    var idMateria = $('#optionMaterias').val();


    $scope.insertCurso(curso,description,idMateria);

    $( "#pBaraddCurso" ).animate({
    width: "100%"
  }, 2000, function() {

     $('#btnMakeNuevaUnidad').removeClass('disabled');

   });
  
  });

  countNuevoCurso += 1;
}

else
{




}



});


$('#btnMakeNuevaUnidad').click(function()
  {

    $('#selectCursos').show();
    $scope.c_spGetCursos();
    $('#nuevaUnidadDescription').show();
    $('#selectCursos').change(function(){

      $('#nuevaUnidad').show();

      $('#nuevaUnidad').bind('change keypress',function(){

                 
                 var tamanoUnidad = $(this).val();
               

              if(tamanoUnidad.length > 0 && countCambioUnidad == 1)
                  {
                     $('#addUnidad').show();


                 }

              countCambioUnidad += 1;

      });

    });

  });


  $('#addUnidad').click(function(){

    $(this).addClass('disabled');
    $('#barraAddUnidad').show();

    var curso = $('#selectCursos').val();
    var description = $('#nuevaUnidadDescription').val();
    var nombreUnidad = $('#nuevaUnidad').val()
    $scope.uc_insertUnidad(curso,description,nombreUnidad);

    $( "#pBaraddUnidad" ).animate({

    width: "100%"
  }, 2000, function() {

     $('#addUnidad').removeClass('disabled');

   });

  });


  });



appYo.controller('allForo',function ($scope, $http ){



$scope.getSubCategoriasForo = function()
{


$http({

  url:'/sf_getSubCategorias',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,config,headers){

/*
        <div  id='sub_matematicas' class='subCategoria'>

          <span class='tSubCat'>Matematicas</span>
          <div class='contentTemasMensajes'>
            <p>Temas: <span class="badge">42</span></p>
            <p>Mensajes: <span class="badge">500</span></p>
          </div>

        </div>
        */

for(var i=0; i< data.length; i++)
{
  if(data[i]['id_categoria'] == 1)
  {
$('#cyt').append('<div id="id_sub__'+data[i]['nombre']+'" class="subCategoria"><span class="tSbuCat">'+data[i]['nombre']+
  '</span><div class="contentTemasMensajes"><p>Temas: <span class="badge">'+data[i]['temas']+'</span></p><p>Mensajes: <span class="badge">'+data[i]['mensajes']+'</span></p></div></div><hr>');

  } // end if 1;

else if(data[i]['id_categoria'] == 2)
  {

  if(data[i]['id_categoria'] == '')
  {
$('#arte').append('<br>');
  }
  else{
$('#arte').append('<div id="id_sub__'+data[i]['nombre']+'" class="subCategoria"><span class="tSbuCat">'+data[i]['nombre']+
  '</span><div class="contentTemasMensajes"><p>Temas: <span class="badge">'+data[i]['temas']+'</span></p><p>Mensajes: <span class="badge">'+data[i]['mensajes']+'</span></p></div></div><hr>');
}

  } // end if 2;

  else if(data[i]['id_categoria'] == 3)
  {

$('#spanish').append('<div id="id_sub__'+data[i]['nombre']+'" class="subCategoria"><span class="tSbuCat">'+data[i]['nombre']+
  '</span><div class="contentTemasMensajes"><p>Temas: <span class="badge">'+data[i]['temas']+'</span></p><p>Mensajes: <span class="badge">'+data[i]['mensajes']+'</span></p></div></div><hr>');

  } // end if 3;

}

$('.subCategoria').click(function(){

var id = $(this).attr('id');
var valorId = id.search('__');
id = id.substr(valorId+2);


window.location = '/foro/dashboard?cat='+id;

});

}).error( function (data,status,config,headers){


});


}



$scope.getSubCategoriasForo();

});

appYo.controller('allEduCont',function ( $scope, $http ){



$scope.getCoursesEdu = function(){

 $http({
            url:'/getCoursesEdu',
            method:'POST',
            headers:{'Content-Type':'application/json; charset=utf-8'}
          }).success( function (data,status,config,headers){

            for(var i =0 ; i < data.length; i++)
            {

              console.log(data[i]['nombre']);
          }

          }).error( function (data,status,config,headers)
          {

            console.log(status);
          });

}


$scope.getCoursesEdu();

});


appYo.controller('allAdministracion', function ($scope,$http){


$('#upNews').click(function(){


  $('.menuAdmin').removeClass('active');
  $(this).addClass('active');

  $.get('/admin_subir_noticia',function(data)
    {
      $('.contenedorModulo').attr('id','contenedorModuloUpNews');
      $('.contenedorModulo').html(data);

      $('#contentAllNews').hide();

        $('#upBtn').click(function(){

          $('#contentAllNews').hide();
          $('#formAddNew').show();

        });


        $('#deleteBtn').click(function(){

          $('#formAddNew').hide();
          $('#contentAllNews').show();

          $http({
            url:'/u_allNews',
            method:'POST',
            headers:{'Content-Type':'application/json; charset=utf-8'}
          }).success( function (data,status,config,headers){

            for(var i =0 ; i < data.length; i++)
            {

              $('#tbodyNews').append('<tr id="'+data[i]['id_noticia']+'"><td>'+data[i]['titulo']+'</td><td>'+data[i]['fechaalta']+'</td><td class="tdRemove"><span class="glyphicon glyphicon-remove"></span></td></tr>');

          }

          }).error( function (data,status,config,headers)
          {

            console.log(status);
          });

        });


    });

});


$('#gUsuarios').click(function(){

  $('.menuAdmin').removeClass('active');
  $(this).addClass('active');

});



$('#mAlertas').click(function(){

  $('.menuAdmin').removeClass('active');
  $(this).addClass('active');

});

$('#vAnalizis').click(function(){

  $('.menuAdmin').removeClass('active');
  $(this).addClass('active');


  $.get('/admin_visualizar_analizis',function(data){
    
      $('.contenedorModulo').attr('id','contenedorModuloVAnalizis');
      $('.contenedorModulo').html(data);
  });
});

$('#proyectos').click(function(){

  $('.menuAdmin').removeClass('active');
  $(this).addClass('active');

});





});

appYo.controller('allIndex', function ($scope,$http)
{


$scope.getNoticias = function()
{

$http({

  url:'/s_getNoticias',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success(function (data,status,config,headers){
/*
for(var i = 0; i < data.length; i++)
{
console.log(data[i]['titulo']);

if(i == 0)
{
$('#subContentCarrousel').append('<div class="item active"><img src="/images/'+data[i]['imagen']+'" height="500" alt="Second slide"><div class="container"><div class="carousel-caption"><h1>'+data[i]['titulo']+'</h1><p>'+data[i]['noticia']+'</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Leer más</a></p></div></div></div>');
}
else
{

$('#subContentCarrousel').append('<div class="item"><img src="/images/'+data[i]['imagen']+'" height="500" alt="Second slide"><div class="container"><div class="carousel-caption"><h1>'+data[i]['titulo']+'</h1><p>'+data[i]['noticia']+'</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Leer más</a></p></div></div></div>');

}

}
*/


}).error( function (data,status,config,headers){

console.log(estatus);

});


}


$scope.getAllReponses = function(obj)
{



$http({

  url:'/u_getAllReponses',
  method:'POST',
  data:obj,
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success(function (data,status,config,headers){



for(var i = 0; i< data.length; i++)
{

$('#comentarios_'+data[i]['id_post']).append('<div class="response_contenedor_unique" id="response_'+
  data[i]['id_response']+'"><img class="imagen_perfil_response" src="/images/'+data[i]['imagen_perfil']+
  '" height="30" width="30"/><span class="nomcom_response">'+data[i]['nomcom']+'</span> <span class="response">'+
  data[i]['response']+'</span></div>');

}


}).error(function (data,status,config,headers){
console.log(status);
});


}

$scope.contestarPizarraGeneral = function(post,idPost)
{

var obj = {};
obj.response = post;
obj.idPost = idPost;

//console.log(obj);


$http({
  url:'/u_responseComent',
  method:'POST',
  data:obj,
  headers:{'Content-Type':'application/json; charset=utf-8'}


}).success(function (data,status,config,headers){

console.log(data[0]['id_post']);



$('#comentarios_'+data[0]['id_post']).append('<div class="response_contenedor_unique" id="response_'+data[0]['id_response']+'"><img class="imagen_perfil_response" src="/images/'+data[0]['imagen_perfil']+'" height="30" width="30"/><span class="nomcom_response">'+data[0]['nomcom']+'</span> <span class="response">'+data[0]['response']+'</span></div>');
$('#response_'+data[0]['id_response']).hide();
$('#response_'+data[0]['id_response']).fadeIn(1000);


}).error(function (data,status,config,headers){

console.log(status);

});



}


$scope.getPuntosTop = function(){



$http({

  url:'/uc_spGetPuntosTop',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,config,headers){

  var tamanoTop = data.length;
   // verify if there more than 0 persons with rank..
  if(tamanoTop > 0 )
  {
  for( var i = 0; i < tamanoTop; i++)
  {

   $('#contenedorTopRankTable').append('<tr><td class="td_table" style="cursor:pointer" id="td_'+data[i]['id_alumno']+'">'+data[i]['nomcom']+'</td><td>'+data[i]['puntos']+'</td></tr>');

  }

  $('.td_table').click(function(){

    var usuarioTop = $(this).attr('id');
    usuarioTop = usuarioTop.substring(3);
    window.location = '/perfil/'+usuarioTop;

  });

}

else{

    $('#contenedorTopRankTable').append('<tr><td rowspan="2" style="text-align:center;">No hay top ranking</td></tr>');


}


}).error( function (datam,status,config,headers){});

}



$scope.getPizarraGeneral = function(){

$http({

  url:'/u_getPizarraGeneral',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,config,headers){

var id_actuales = [];

  var id = $('.id').attr('id');

if(data.length > 0 )
{
 


    for(var i = 0; i < data.length; i++)
    {

    if(data[i]['foto_imagen'] !='')
    {
      
      id_actuales.push(data[i]['id_post']); 

    $('#contentPizarraGeneral'+id).append('<div class="informationPizarraGeneral"><div class="headerPizarraGeneral"><h4><img src="/images/'+
      data[i]['imagen']+'" width="40px" height="40px;"> '+
      data[i]['nomcom']+'</h4></div><div class="midPizarraGeneral"><div class="contentPost">'+data[i]['post']+
      '<span class="caret"></span></div><div class="imageContent"><img src="/images/'+
      data[i]['foto_imagen']+
      '" class="image-post"/></div></div>div id="comentarios_'+data[i]['id_post']+'" class="comentariosGeneral"><hr></div><div class="footerTextArea"><textarea id="text_'+data[i]['id_post']+'"  class="footerfooterTextAreaSubmit" placeholder="@'+data[i]['nomcom']+':" maxlength="450"></textarea><div></p><button class="btn btn-primary buttonComentariosGeneral" id="button_'+data[i]['id_post']+'" >Comentar</button></div>');

    }

    else
    {
      id_actuales.push(data[i]['id_post']);
      //console.log(data[i]['id_post']);
      $('#contentPizarraGeneral'+id).append('<div class="informationPizarraGeneral"><div class="headerPizarraGeneral"><h4><img src="/images/'+
      data[i]['imagen']+'" width="40px" height="40px;"> '+
      data[i]['nomcom']+'</h4><span class="caret"></span></div><div class="midPizarraGeneral">'+data[i]['post']+
      '</div><div id="comentarios_'+data[i]['id_post']+'" class="comentariosGeneral"><hr></div><div class="footerTextArea"><textarea id="text_'+data[i]['id_post']+'"  class="footerfooterTextAreaSubmit" placeholder="@'+data[i]['nomcom']+':" maxlength="450"></textarea><div></p><button class="btn btn-primary buttonComentariosGeneral" id="button_'+data[i]['id_post']+'" >Comentar</button></div>');

    }



    }
    id_actuales.push('');
    $scope.getAllReponses(id_actuales);

$('#contentPizarraGeneral'+id+' .buttonComentariosGeneral').click(function(){

var idPost = $(this).attr('id');
idPost = idPost.substring(7);

var postTextArea = $('#text_'+idPost).val();
var value = postTextArea;
value = value.replace(/\n/g, "</br>");
$('#text_'+idPost).val('');

$scope.contestarPizarraGeneral(value,idPost);


});


}

else
{

$('#contentPizarraGeneral'+id).append('<div class="mensajeSinPosts"><h3>Bienvenido aqui comenzara una nueva historia!</h3><p style="background-color:#d9534f; color:white; padding:10px;">No hay mensajes nuevos</p></div>');

}



}).error(function (data,status,config,headers){


});

}



////////////////////////////////////////
//////////// RUN FUNCTIONS ////////////
//////////////////////////////////////

$scope.getPuntosTop();
$scope.getPizarraGeneral();
$scope.getNoticias();





});


/////////////////////////////////////////////////////////////////////////

appYo.controller('allMixtliFalse',function ($scope,$http){


$scope.actualizarMixtli = function()
{


  $http({

    url:'/activarMixtli',
    method:'POST',
    headers: {'Content-Type':'application/json; charset=utf-8'}


  }).success( function (data,status,headers,config) {

  console.log(data);

  }).error( function (data,status,headers,config){});
  //alert(id);


}



});


appYo.controller('allMixtliTrue', function ($scope,$http){


  $('#subirArchivoNubes').click( function (){

    
    $('#txtSubirNube').text(' Subiendo ');

    });

});



appYo.controller('allnew', function ($scope,$http)
{


$('.submenu').mouseover(function(){

 $(this).addClass('submenuhover');

}).mouseout(function(){

  $(this).removeClass('submenuhover');

});



$scope.configuracion = function()
{

 $scope.fakeBtnConfiguracion;

}


$scope.mixtliClicked = function()
{

  window.location = '/mixtli';


}




/*

$scope.getAmigosChat = function()
{

$http({
  url:'/getAmigosChat',
  method:'POST',
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,headers,config){

console.log(data.length);
  for(var i = 0;i < data.length; i++)
  {
      
     $('#contenedorAmigosChat').append('<div class="row"><div class="col-md-10" style=""><h5>'+data[i]['nombre']+'</h5></div><div class="col-md-2"><h5><img src="../images/icono-online.png" width="10px" height="10px"/></h5></div></div>');

  }

}).error( function (data,status,headers,config){});

}

$scope.getAmigosChat();
*/
$scope.chateo = function()
{
  var objetos = {};
  objetos.nombre = 'Luis Manuel';

  $http(
  {
    url: '/u_chatAmigos',
    method: 'POST',
    data: objetos,
    headers :{'Content-Type':'application/json; charset=utf-8'}
  }).success( function (data,status,headers,config){

    alert(data);

    }).error(function (data,status,headers,config){


    });

}

$scope.chateo();

  $(function(){
        $('.normal').autosize();
        $('.animated').autosize({append: "\n"});
      });


     var counter = 0;

$scope.idAmigo = $('.perfilAmigo').attr('id');
$scope.id = $('.id').attr('id');

$scope.getProgresaCuatrimestral = function(){

var obj = {};

obj.id = $scope.idAmigo;

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


console.log(objetos);



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



$('.submenu').click(function(){

$('.active').removeClass();
 $(this).addClass('active');


});




/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////// OBTENCIÓN DE RAMAS //////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


$('#inboxUser').click(function(){

 window.location = '/inbox';


});


$('#muroUser').click(function(){

 window.location = '/perfil';


});

$('#editUser').click(function(){

window.location = '/edit';

});

$('#avancesUser').click(function(){

 window.location = '/avances';

});



$scope.c_getRamas = function()
{
var obj = {};

obj.id = $scope.idAmigo;
 
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


//$scope.lapizero;
 $('#btnLapizar').hide();
 $('#btnSubirImagen').hide();


$('#lapizero').click(function(){

  $('#btnLapizar').show();
  $('#btnSubirImagen').show();



  $('#btnSubirImagen').click(function(){

    $('#fileInput').click();


  





  });




  $('#btnLapizar').click(function(){
  
    if($scope.lapizero.length > 0  && $scope.id.length > 1)
    {

     $scope.lapizarPizarra();

    }
    else{

        $('#lapizero').css('border-color','red');

        }

  });

});




$scope.lapizarPizarra = function()
{

var obj = {};
obj.id = $scope.id;
obj.idAmigo = $scope.idAmigo;

var value = $scope.lapizero;
value = value.replace(/\n/g, "</br>");


console.log(value);   

obj.mensaje = value;

//obj.mensaje = $scope.lapizero;

$http({

      url : '/lapizarPizarra',
      method : 'POST',
      data : obj,
      headers: {'Content-Type':'application/json; charset=utf-8'}

    })
.success( function (data,status,headers,config){

 console.log(data);


setTimeout(function(){

 $('#espacioParaNuevoPost').append('<div class="row" style="margin-top:5px;">'
      +'<div class="col-md-9 col-md-offset-1" style="">'
       +'<blockquote>'
      +'<h3 style="color:#47838a;">'+data[0].usuario+'</h2>'
      +'<h4 style="color:#6f6f6f;">'+data[0].mensaje+'</h4>'
      +'</blockquote></div></div>');

},500);



/*
 $('#contenedorPizarraPersonal').append('<div class="row" style="margin-top:5px;">'
      +'<div class="col-md-9 col-md-offset-1" style="">'
      +'<h4 style="color:#6f6f6f;">'+data[0].mensaje+'</h4>'
      +'</div></div>');
*/




}).error( function (data,status,headers,config) {

console.log(status);


});
}


$scope.getCursosRandom = function()
{

$http({

      url : '/c_getCursosRandom',
      method : 'POST',
      headers: {'Content-Type':'application/json; charset=utf-8'}

    })
.success( function (data,status,headers,config){

  console.log(data[0].id_curso);

  console.log(data[0].nombre);

  /*
  for(var i = 0; i < data.length; i++)
  {

  $('#contenedorPizarraPersonal').append('<div class="row" style="margin-top:10px; ">'
      +'<div class="col-md-9 col-md-offset-1" style="word-wrap:break-word;">'
       +'<blockquote>'
      +'<h3 style="color:#47838a;">'+data[i].usuarioAlta+'</h3>'
      +'<h4 style="color:#6f6f6f;">'+data[i].post+'</h4>'
      +'</blockquote></div></div>');
 
  }

  */

}).error( function (data,status,headers,config){


});



};




$scope.searchAmigosConectados = function(){


$http({

      url: '/searchAmigosConectados',
      method: 'POST',
      headers: {'Content-Type':'application/json; charset=utf-8'}

}).success(function (data,status,headers,config){
console.log(data);
$('#contenedorAmigosChat').empty();

for(var i = 0; i< data.length; i++)
{
  console.log(data[i].nomcom);

if(data[i].estado_conexion == 'On')
{



$('#contenedorAmigosChat').
append('<div class="row contenedorDeAmigos"   id="'+data[i]['id_alumno']+'"><div class="col-md-10" style="cursor:pointer;"><h5>'
  +data[i]['nomcom']+
  '</h5></div><div class="col-md-2"><h5><img src="../images/icono-online.png" width="10px" height="10px"/></h5></div></div>');

}
else
  {

  $('#contenedorAmigosChat').
append('<div class="row contenedorDeAmigos"  id="'+data[i]['id_alumno']+'"><div  class="col-md-10" style="cursor:pointer;"><h5>'
  +data[i]['nomcom']+
  '</h5></div><div class="col-md-2"><h5><img src="../images/icono-offline.png" width="10px" height="10px"/></h5></div></div>');


  }

}

$('.contenedorDeAmigos').on('click',function(){

  var objUser = {}
  

  var idFriend = this.id;
  var idMe = $('.id').attr('id');
  var nomcom = $(this).text();
  var divCombination = idFriend+'_'+idMe;
  console.log(nomcom);
  console.log(divCombination);

  objUser.idAmigoPost = idFriend ; 
  objUser.idAmigoTo = idMe;


 $('#contenedorDeChats').append('<div id="'+divCombination+'" class="chatContenedor"><div class="chat_header">'+
  nomcom
  +'</div> <div class="contenedorTextosChat" id="contenedorTextosChat'+divCombination+'"></div></div>');



$http({

  url: '/u_getInboxMsjForId',
  method: 'POST',
  data: objUser,
  headers: {'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,config,headers,config){

console.log(data);

for(var j = 0; j < data.length; j++)
{
     if(data[j]['id_user_from'] == idMe )
{
$('#contenedorTextosChat'+divCombination).append('<div class="content_text_chat_me">'+data[j]['chat_post']+'</div>');
}

else 
{

$('#contenedorTextosChat'+divCombination).append('<div class="content_text_chat_friend">'+data[j]['chat_post']+'</div>');

}


}


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

var divScrolling = document.getElementById('contenedorTextosChat'+divCombination);
if(divScrolling)
{
var tamanoDiv = divScrolling.scrollHeight;

$('#contenedorTextosChat'+divCombination).scrollTop(tamanoDiv);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).error(function (data,config,headers,config){});



  $('#'+divCombination).append('<div class="text_send"><textarea class="text_area_chat"></textarea></div>');

$scope.idFriend = this.id;

    function enviarMensaje()
             {
              var datos = {};
              datos.idFriend = $scope.idFriend;
              datos.idMe = $('.id').attr('id');
              console.log(datos.idMe);
              datos.mensaje = $('#'+divCombination + ' .text_area_chat').val();

              io.emit('conteoAlerts',datos);
              io.emit('createRoom',datos);

             }


  $('#'+divCombination + ' .text_area_chat').bind('change keypress',function(e){

              var kcode = e.keycode || e.which;
         
              if(kcode == 13)
                {

                  enviarMensaje();
                  $(this).val('');


                }

            });

$('.chatContenedor .chat_header').click(function(e){

e.preventDefault();
$('#'+divCombination).remove();
$('#'+divCombination).hide();


});

});


}).error( function (data,status,headers,config){ 


});



}





$scope.pizarraPersonal = function()
{

var obj =  {};

obj.id = $scope.idAmigo;

$http({

      url : '/pizarraPersonal',
      method : 'POST',
      data : obj,
      headers: {'Content-Type':'application/json; charset=utf-8'}

    })
.success( function (data,status,headers,config){

  
  
  for(var i = 0; i < data.length; i++)
  {

  $('#contenedorPizarraPersonal').append('<div class="row" style="margin-top:10px; ">'
      +'<div class="col-md-9 col-md-offset-1" style="word-wrap:break-word;">'
       +'<blockquote>'
      +'<h3 style="color:#47838a;">'+data[i].usuarioAlta+'</h3>'
      +'<h4 style="color:#6f6f6f;">'+data[i].post+'</h4>'
      +'</blockquote></div></div>');
 
  }
}).error( function (data,status,headers,config){


});


}


$scope.getCantidadAvanceUsuario = function()
{

var obj = {};

$http({

      url : '/getPuntosAllMes',
      method : 'POST',
      data : obj,
      headers: {'Content-Type':'application/json; charset=utf-8'}

    })
.success( function (data,status,headers,config){


  var meses = [];
  for(var i = 0; i < data.length; i++)
  {
    if(data[i]['puntos'] != null)
    {
      meses[i] = data[i]['puntos'];
    }
    else
    {
      meses[i] = 0;
    }
  }


$(function () {
    $('#contenedorAvencePersonal').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Media Puntos por Mes'
        },
        subtitle: {
            text: 'Yancuic Ontli'
        },
        xAxis: {
            categories: ['Enero - Feb', 'Mar - Apr', 'May - Jun', 'Jul - Aug', 'Sep - Oct', 'Nov - Dec']
        },
        yAxis: {
            title: {
                text: 'Puntos bimestrales'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Luis Manuel Magallon',
            data: meses
        }]
    });
});

  

}).error( function (data,status,headers,config){


});







}


$scope.getCantidadAvanceUsuario();

$scope.getConteoAmigos = function()
{

var object = {};

$http({

      url: '/getConteoAmigos',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
         
        $('#titleAmigos').text(data[0]['amigos']);
        console.log(data);
        
      }).error( function (data,status,headers,config){



      });


}

$scope.getConteoAmigos();


$scope.seeFriend = function (id)
{

//console.log(id);
var nId = id.currentTarget.attributes.data.value;
 
 window.location = '/perfil/'+nId;

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
        /*
          for(var i  = 0; i< data.length; i++){
            
           // $('#contenedorAmigos').append('<div id="'+data[i].idamigo+'" style="cursor:pointer;" class=" col-md-2 friends"><img src="/images/'+data[i].imagen+'" width="50px" height="50px"/>'+data[i].nombre+'</div>');
              $('#contenedorAmigos').append('<tr id="'+data[i].idamigo+'" style="cursor:pointer;" class="friends"><td class="text-center"><img src="/images/'+data[i].imagen+'" width="25px" height="25px"/></th><th>'+data[i].nombre+'</td><td></td></tr>');
            

            }

          $('.friends').click(function()
            {

              window.location = '/perfil/' + $(this).attr('id');

            });
*/
$scope.myFriends = data;


      }).error( function (data,status,headers,config){



      });




}




$scope.getUserAmigos();

$scope.c_getRamas();

$scope.pizarraPersonal();

$scope.getProgresaCuatrimestral();

$scope.searchAmigosConectados();

setInterval(function(){

$scope.searchAmigosConectados();

},
10000
);



  

});



//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////   EDITAR PERFIL CONTROLLER /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


/*
appYo.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        
        ele.html(html);

        $compile(ele.contents())(scope);

      });
    }
  };
});
*/

appYo.controller('allInboxMsj',function ($scope,$http)
{


    $('#inboxUser').click(function (){

      window.location = '/inbox';

    });


    $('#muroUser').click(function (){

      window.location = '/perfil';

    });



$scope.getInboxMsjId = function()
{

var idAmigoPost = $('.idsPost').attr('id');
var object = {};
object.idAmigoPost = idAmigoPost;
var id = $('.id').attr('id');
$('#contenedorMensajesIdSub'+idAmigoPost+'_'+id).addClass('contenedorMensajesIdSub');

$http(
      {

        url:'/u_getInboxMsjForId',
        method: 'POST',
        data:object,
        header:{'Content-Type':'application/json; charset=utf-8'}

      }

        ).success(function (data,status,config,headers){

          for(var i= 0; i< data.length; i++)
          {

          if(data[i]['id_user_from'] == idAmigoPost ){

            $('#contenedorMensajesIdSub'+idAmigoPost+'_'+id).append('<div class="row" style="margin-top:10px;"><div class="col-md-1"><img src="/images/'+data[i]['imagen']+'" width="30" height="30"/></div><div class="col-md-8" style=" padding-left:50px;"><span style="color:#676767;"><strong>'+data[i]['nomcom']+'</strong></span><br>'+data[i]['chat_post']+'</div></div>');
            //console.log(data[i]['chat_post']);
        }
        else
        {

        $('#contenedorMensajesIdSub'+idAmigoPost+'_'+id).append('<div class="row" style="margin-top:10px;"><div class="col-md-1"><img src="/images/'+data[i]['imagen']+'" width="30" height="30"/></div><div class="col-md-8" style=" padding-left:50px;"><span style="color:#3b95da;"><strong>'+data[i]['nomcom']+'</strong></span><br>'+data[i]['chat_post']+'</div></div>');
        }





      }

      console.log(document.getElementById('contenedorMensajesIdSub'+idAmigoPost+'_'+id).scrollHeight);
var tamanoScrollin = document.getElementById('contenedorMensajesIdSub'+idAmigoPost+'_'+id).scrollHeight;

$('div#contenedorMensajesIdSub'+idAmigoPost+'_'+id).scrollTop(tamanoScrollin);

             //$('#contenedorMensajesId').append('<div class="row" style="bottom:10px; position:absolute;"><div><textarea id="mensajeInboxSend" style="width:98%; margin-left:1%; height:90px;"></textarea><br><button id="enviarMensaje" class="btn btn-primary col-md-12">Enviar</button></div></div>');

             function enviarMensaje()
             {
              var datos = {};
              datos.idFriend = idAmigoPost;
              datos.idMe = $('.id').attr('id');
              console.log(datos.idMe);
              datos.mensaje = $('#mensajeInboxSend').val();

              io.emit('conteoAlerts',datos);
              io.emit('createRoom',datos);

             }

            $('#mensajeInboxSend').bind('change keypress',function(e){

              var kcode = e.keycode || e.which;
         
              if(kcode == 13)
                {

                  enviarMensaje();
                  $(this).val('');


                }

            });


/*
             $('#enviarMensaje').click(function(){
             



             });

*/

      }).error(function (data,status,config,headers){});




}

$scope.getInboxMsjId();


});



appYo.controller('allInbox',function ($scope,$http)
  {
    




    $('#inboxUser').click(function (){

      window.location = '/inbox';

    });


    $('#muroUser').click(function (){

      window.location = '/perfil';

    });

    $scope.getPostMsjId = function()
    {

      $http(
      {

        url:'',
        method: '',
        header:{'Content-Type':'application/json; charset=utf-8'}

      }

        ).success(function (data,status,config,headers){


      }).error(function (data,status,config,headers){});


    }


    $scope.getInboxMsj = function()
    {

      $http({
        url: '/getInboxMsj',
        method: 'POST',
        headers:{'Content-Type':'application/json; charset=utf-8'}

      }).success(function (data,status,config,headers){


          for(var i = 0; i < data.length; i++)
          {

            $('#tbodyInbox').append('<tr class="postAmigos" id='+data[i]['id_user_from']+' style="cursor:pointer;"><td><img class="img-circle" src="/images/'+data[i]['imagen']+'" width="40" height="40"/><span style="margin-top:3px; margin-left:2px;">'+data[i]['nomcom']+'</span></td><td>'+data[i]['chat_post']+'</td></tr>');

          }

          
          $('.postAmigos').click(function(){
            var idAmigoPost = $(this).attr('id');
            
  

            
            window.location = '/inbox/'+idAmigoPost;


          });



      }).error(function (data,status,config,headers){


      });


    }


  $scope.getInboxMsj();



  }
  );




appYo.controller('allcursos', function ($scope,$http)
  {




   




$('#cursosSearch').bind("keyup change",function(e){







/*
var isSearchOfFriend = $(this).val().search('@');

 //console.log(isSearchOfFriend);
 var amigo = $(this).val().substring(isSearchOfFriend,isSearchOfFriend+1);
 var amigoReal = $(this).val().substring(isSearchOfFriend+1)

if(amigo == '@')
  {
    if(amigoReal.length > 0)
{  
*/  


 // $scope.searchAmigos();
/*
}
  }
*/
});

$scope.searchCursos = function(busqueda)
{



  
}

$scope.searchAmigos = function()
{

var obj = {};
obj.busqueda = busqueda;

$http({
    url: '/getAmigosForSearch',
    method: 'POST',
    data:obj,
    headers:{'Content-Type':'application/json; charset=utf-8'}

 }).success(function (data,status,config,headers){

  
  console.log(data[0]['id_amigo']);
  console.log(data[0]['nomcom']);
  console.log(data.length);

/*

$(function() {

   if(data.length > 0)
 {

var datos = [];

for(var i = 0; i < data.length; i++)
{

datos.push(data[i]['nomcom']);
}
//$( "#cursosSearch" ).val('');
 var patron = '@';   
 var valorInput = $( "#cursosSearch" ).val();
 valorInput = valorInput.replace(patron,'');
 $('#cursosSearch').val(valorInput);
////////////////////////////////////////////////////

     }

  
  });

*/




 }).error(function (data,status,config,headers){


 });




}

//$scope.searchCanales('@Luis Manuel');



$scope.getCanalesClasificados = function()
{

$http({

      url: '/getCanalesClasificados',
      method: 'POST',
      headers: {'Content-Type':'application/json; charset=utf-8'}

}).success(function (data,status,headers,config){

for(var i = 0; i< data.length; i++)
{
  console.log(data[i].nombre);

  $('#realContenedorRamas').append("<div class='col-md-10 contenedoresCurso' style='cursor:pointer;'><span class='logotypeChannel'>asd</span><span>"+data[i].nombre+"</span></div>"
                                  +"<div class='col-md-1 contenedoresCurso' style=''><span>"+data[i].curso+"</span></div>");


}
}).error( function (data,status,headers,config){ 


});

}



$scope.getCursosRandom = function()
{

$http({

      url : '/c_getCursosRandom',
      method : 'POST',
      headers: {'Content-Type':'application/json; charset=utf-8'}

    })
.success( function (data,status,headers,config){

  var margin = 10;

  for(var i = 0; i < data.length; i++)
  {

    if(i > 0)
      margin = 35;

  $('#containerSearchCourses').append("<div class='row' style='margin-top:"+margin+"px;'>"
            +"<div class='col-md-3'>"
              +"<img class='img-rounded' src='/uploads/"+data[i].imagen+"' width='200px' height='150px'>"
            +"</div>"
               +"<div class='col-md-8' style='word-wrap:break-word;'>"
              +"<h3 style='color:#d37d38;'>"+data[i].nombre+"</h3>"
              +"<p>"+data[i].descripcion+"</p>"
            +"</div>"
          +"</div>");
  }

}).error( function (data,status,headers,config){


});

}

$scope.getCanalesClasificados();
$scope.getCursosRandom();
  
  });






appYo.controller('alledit', function ($scope,$http,$compile) {


  function beTeacher()
  {
    alert('asd');

  }

  $(function(){
        $('.normal').autosize();
        $('.animated').autosize({append: "\n"});
      });


 var counterInfo = 0; // Contador para no repetir las peticiones get y el html embebido.


$scope.eliminarCuenta = function(arg)
{


$('.menuEdit').removeClass('active');
$('#eliminarCuenta').addClass('active');


$('#contenedorConfiguraciones').html('');

  $http(
  {
    url:'/eliminarCuenta',
    method:'GET',
    headers:{'Content-Type':'application/json; charset=utf-8'}
  }
    ).success(function (data,status,headers,config){

      $('#contenedorConfiguraciones').html(data);
      $( "#dialog-confirm" ).hide();
      
      $('#btnEliminarCuenta').click(function(){
$( "#dialog-confirm" ).show();
        $(function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height:340,
      width:350,
      modal: true,
      buttons: {
        "Eliminar Cuenta": function() {

          //$( this ).dialog( "close" );
        },
        Cancel: function() {

          $( this ).dialog( "close" );
        }
      }
    });
  });

        });

    }).error( function (data,status,headers,config){


  });

}



///////////////// CONF. CUENTA ///////////////

$scope.getInfoCuenta = function(arg){

$('.menuEdit').removeClass('active');
$('#confCuenta').addClass('active');


if(counterInfo == 0 || counterInfo == 1)
{

$('#contenedorConfiguraciones').html('');


$http({

  url :'/getInfoCuenta',
  method: 'GET',
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,headers,config) {

$('#contenedorConfiguraciones').html(data);

$('#passwordConfOld').hide();
$('#btnGuardarCambiosConfCorreo').hide();
$('#btnbtnGuardarCambiosConfContrasena').hide();
$('#avisoPasswordRepetido').hide();
$('#vContrasenaCorreo').hide();

counterInfo = 2;

$('#btnGuardarCambiosConfCorreo').attr('disabled',true);
$('#btnbtnGuardarCambiosConfContrasena').attr('disabled',true);

$('#passwordConfNew').prop('disabled',true);

$('#contenedor_beTeacher').hide();
 $('#beTeacher_proceso').hide();

$('#beTeacher').click(function(){

  $('#em_pass').removeClass('active');
  $(this).addClass('active');
  $('#contenedor_em_pass').hide();
  $('#contenedor_beTeacher').show();
 $('#beTeacher_false').hide();
 $('#beTeacher_true').hide();
 $('#beTeacher_proceso').hide();
  $http({
    url:'/validateIsTeacher',
    method: 'POST',
    headers:{'Content-Type':'application/json; charset=utf-8'}

  }).success( function (data,status,headers,config) {

var maestro = data[0]['maestro'];
 if(maestro != null && maestro == 1)
 {
   
    $('#beTeacher_true').show();


  }
else if(maestro == 0)
{    
    $('#beTeacher_false').show();
    $('#form_maestro').hide();
    $('#btnQuieroMaestro').click(function (){
      $('#contentQuieroMaestro').hide();
      $('#form_maestro').show();


    ///////////// Configuration form teacher ////////////
    for(var i = 1; i <= 24; i++) 
    {
    if(i == 1)
    $('#tiempo_form').append('<option id="'+i+'" value="'+i+'">'+i+' Hora</option>');
    else
     {

       $('#tiempo_form').append('<option id="'+i+'" value="'+i+'">'+i+' Horas</option>');

     }
   }

   $('#btn_cv').click(function()
   {  


          $('#btn_subm_cv').click();
         $('#btn_subm_cv').change(function(){

          var file = $('#btn_subm_cv').val();
          $('#btn_cv').empty();
          $('#btn_cv').append('<i class="glyphicon glyphicon-ok"></i> Agregado');
          $('#nameFile').text(file);
         });
        return false;
   });



   $('#btn_enviar_form_teacher').click(function(){


   var ciudad = $('#ciudad_form').val();
   var municipio = $('#municipio_form').val();
   var domicilio = $('#domicilio_form').val();
   var escolaridad = $('#escolaridad_form').val();
   var escuela = $('#escuela_form').val();
   var ramas = $('#ramas_form').val();
   var entusiasmo = $('#entusiasmo_form').val();
   var historial = $('input:radio[name="respuesta_clases"]').filter(":checked").val();  // select the true radio. 
   var donde = $('#donde_form').val();
   var tiempo = $('#tiempo_form').val();
   var cv = $('#btn_subm_cv').val();
   var counter = 0; 
   alert(historial);
   //alert(historial);
    if(ciudad != '' && ciudad.length > 3 )
      {
        counter += 1;

      }
     else
     {
         $('#ciudad_form').css('border-color','#e74c3c');
         
     } 
    
     if(municipio != '' && municipio.length > 3)
     {
         counter += 1; 

     }
     else
     {
           $('#municipio_form').css('border-color','#e74c3c');

     }
     if(domicilio != '' && domicilio.length > 3)
     {
        counter += 1;
     }
     else
     {
        $('#domicilio_form').css('border-color','#e74c3c');

     }
     if(escolaridad != '' && escolaridad.length > 3)
     {
        counter += 1;
     }
     else
     {

        $('#escolaridad_form').css('border-color','#e74c3c');

     }
     if(escuela != '' && escuela.length > 3)
     {
        counter += 1;
     }
     else
     {
      
        $('#escuela_form').css('border-color','#e74c3c');

     }

     if(ramas != '' && ramas.length > 3)
     {
        counter += 1;
     }
     else
     {
      
        $('#ramas_form').css('border-color','#e74c3c');

     }
     if(entusiasmo != '' && entusiasmo.length > 3)
     {
        counter += 1;
     }
     else
     {
      
        $('#entusiasmo_form').css('border-color','#e74c3c');

     }
    if(historial != ''  && historial != undefined)
     {
        counter += 1;
     }
     
     
     
     else
     {
      
        $('#historial_form').css('border-color','#e74c3c');

     }
      if(donde != '' && donde.length > 3)
     {
        counter += 1;
     }
     else
     {
      
        $('#donde_form').css('border-color','#e74c3c');

     }

     if(tiempo != '')
     {
        counter += 1;
     }
     else
     {
      
        $('#tiempo_form').css('border-color','#e74c3c');

     }
     
     if(counter == 10)
     {

       

 var archivo = $('#btn_subm_cv')[0].files[0];

console.log(archivo);

//console.log(archivo.attr('name'));


data = new FormData();
data.append('cv',archivo);
data.append('ciudad',ciudad);
data.append('domicilio', domicilio);
data.append('municipio', municipio);
data.append('escolaridad', escolaridad);
data.append('escuela', escuela);
data.append('ramas',ramas);
data.append('entusiasmo',entusiasmo);
data.append('historial',historial);
data.append('tiempo',tiempo);
data.append('donde',donde);



console.log(data);


  $.ajax({
    url:'/getUpCV', //Url a donde la enviaremos
    type:'POST', //Metodo que usaremos
    contentType:false, //Debe estar en false para que pase el objeto sin procesar
    data:data, //Le pasamos el objeto que creamos con los archivos
    processData:false, //Debe estar en false para que JQuery no procese los datos a enviar
    cache:false //Para que el formulario no guarde cache
  }).done(function(msg){

    //$("#cargados").append(msg); //Mostrara los archivos cargados en el div con el id "Cargados"
    
  });


return false;


     }

// end if;


   });



  
   
   ////////////////////////// Form Submit //////////////////
 function sendTeacherWants()
 {



  

 }



    });
}
else if( maestro == 2)
{
$('#beTeacher_true').hide();
$('#form_false').hide();
$('#beTeacher_proceso').show();
}

  }).error( function (data,status,headers,config){


  });


 


});

$('#btnEditarUsuario').click(function(){
            
            $('#btnGuardarCambiosConfCorreo').show();
            $('#vContrasenaCorreo').show();
            
            $('#btnGuardarCambiosConfCorreo').click(function(){



               // do it
               $('#resultCambioCorreo').html('');
               var usuario = $('#usuarioConf').val();
               var contrasena = $('#vContrasenaCorreo').val();
               usuario = usuario.trim();
               usuario = usuario.toLowerCase();
               var isCorreo = usuario.indexOf('@');
               var tipoDominio = usuario.indexOf('.',isCorreo);
               
               var tipoCorreo = usuario.substring(isCorreo+1,tipoDominio)
                   
               
                tipoDominio = usuario.substring(tipoDominio);


               console.log(isCorreo);
              console.log(tipoCorreo);
               console.log(tipoDominio);
               

               isCorreo = usuario.substring(isCorreo,isCorreo+1);
               if(isCorreo == '@')
                {
                 if(tipoCorreo.length > 2)
                  {
                     if(tipoDominio.length > 2)
                      {

                        // Cambiaremos el correo.

                          $scope.cambiarCorreo(contrasena,usuario);

                      }
                      else{

                          console.log('el correo es incorrecto');

                      }
                  } 
                  else{console.log('el correo es incorrecto');}

                }

               console.log(isCorreo);
               if(usuario.length >= 3 )
                {


                }

            });

            $('#usuarioConf').prop('disabled',false);

            $('#usuarioConf').bind("keyup change",function(){


              

              console.log($(this).val());

          // no funciona aún..
            if($('#usuarioConf').val() <= 3)
            {
                console.log($('#usuarioConf').val());

                $('#btnGuardarCambiosConfCorreo').attr('disabled',true);

            }

          
          //////////////

              $('#btnGuardarCambiosConfCorreo').attr('disabled',false);

              });

          });

 



$('#btnEditarPassword').click(function(){

    $('#btnbtnGuardarCambiosConfContrasena').show();

  $('#passwordConfNew').prop('disabled',false);

  $('#passwordConfOld').show();

  var validacion;
  var password;

  $('#passwordConfNew').bind('focusout',function(){  

  var passwordViejo = $('#passwordConfOld').val();
  var passwordNuevo = $('#passwordConfNew').val();

  $('#avisoPasswordRepetido').hide();


  if(passwordNuevo.length >= 0)
  {
    if(passwordNuevo.length <= 4)
      {

        
              console.log('es incorrecto');
              validacion = 0;

      }
    else if(passwordNuevo.length >= 5)
      {

        
              console.log('es correcto');
              validacion = 1;
              password = passwordNuevo;



      } 
  
  }
    
  
    });

  $('#passwordConfOld').bind('keyup change',function(){


    console.log($(this).val());

    $scope.verificarCorreo($(this).val(),validacion,password);

   


   });

$('#btnbtnGuardarCambiosConfContrasena').click(function()
                {


                  $scope.cambiarContrasena($scope.password,$scope.contrasena);
                  
                });


   $('#btnGuardarCambiosConf').click(function(){

             alert('clicked now');

          });

  
 });

//$('#usuarioConf').val();


}).error( function (data,status,headers,config) {


});
  
  } // end if

}

$scope.cambiarDatos = function(datos)
{
 
  $http({
    url:'/subirImagenPerfil',
    method:'POST',
    data:datos
   
  }).success( function (data,status,headers,config){

    console.log(data);

  }).error( function (data,status,headers,config){


  });


}

$scope.getInfPersonal = function(arg) {
    //alert('Clicked ' + arg);
    
  $('.menuEdit').removeClass('active');
$('#infPersonal').addClass('active');


    $scope.nigga = 'true';
 

if(counterInfo == 0 || counterInfo == 2)
{

$('#contenedorConfiguraciones').html('');

 $http({

   url:'/configuracionPersonal',
   method:'GET',
   headers :{'Content-Type':'application/json; charset=utf-8'}

  }).success( function (data,status,headers,config){

       $('#contenedorConfiguraciones').html(data); 
    
       counterInfo = 1;

        $('#btnUserImagen').click(function(){

                $('#userImagen').click();
                
        });

        $('#btnUserImagenPortada').click(function(){
          
          $('#userImagenPortada').click();

        });


          $('#btnEditarNombrePerfil').click(function(){

            $('#userNombreUsuario').prop('disabled',false);

          });


$('#formChangePerfil').submit( function(event){
  event.preventDefault();
var archivo = $('#userImagen')[0].files[0];
var pais = $('#userPais').val();

console.log(archivo);

//console.log(archivo.attr('name'));


data = new FormData();
data.append('photo',archivo);
data.append('pais',pais);


console.log(data);


  $.ajax({
    url:'/subirImagenPerfil', //Url a donde la enviaremos
    type:'POST', //Metodo que usaremos
    contentType:false, //Debe estar en false para que pase el objeto sin procesar
    data:data, //Le pasamos el objeto que creamos con los archivos
    processData:false, //Debe estar en false para que JQuery no procese los datos a enviar
    cache:false //Para que el formulario no guarde cache
  }).done(function(msg){

    //$("#cargados").append(msg); //Mostrara los archivos cargados en el div con el id "Cargados"
    
  });


return false;
//console.log(  );
//var imagen = $('#').val();
//$scope.cambiarDatos(datos);



});
/*
          $('#btnFinalizarGuardarPerfil').click(function(){

            var pais = $('#userPais').val();
            var ciudad = $('#userCiudad').val();
            var idioma = $('#userIdioma').val();

            

          });
*/

            //var palabra = new Array();
            //var oracion;
      //var kcode = e.keycode || e.which;
       
         
         $("#userCiudad").bind("keyup change", function(e) {
            
           console.log($(this).val());
           $('#prevCiudad').text($(this).val());

      });

      $("#userPais").bind("keyup change", function(e) {
            
           console.log($(this).val());
           $('#prevPais').text($(this).val());

      });

        $("#userIdioma").bind("keyup change", function(e) {
            
           console.log($(this).val());
           $('#prevIdioma').text($(this).val());

        });

        $("#userInformacion").bind("keyup change", function(e) {
            
           console.log($(this).val());
           $('#prevInformacion').text($(this).val());

        });

            $("#userNombreUsuario").bind("keyup change", function(e) {
            
           console.log($(this).val());
           $('#prevRealName').text($(this).val());

        });
              $("#userEscuela").bind("keyup change", function(e) {
            
           console.log($(this).val());
           $('#prevEscuela').text($(this).val());

        });


  
  }).error( function (data, status, headers, config){

  });
  }
   
  }
  
  

//////////////////////////////////////////////////////////////////////
////////////////// FUNCIONES DE EDICION DB //////////////////////////
////////////////////////////////////////////////////////////////////


$scope.verificarCorreo = function(contrasena,validacion,password)
{

var obj = {};
    obj.contrasena = contrasena;


$scope.password = password; 
$scope.contrasena = contrasena;

  $http({
  url :'/verificarCorreoConf',
  method: 'POST',
  data: obj,
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,headers,config) {

  console.log(data[0].result);
  console.log(validacion);

   if(validacion == 1 && data[0].result == 1  )
      {

        

        if(password == contrasena)
          {

            $('#avisoPasswordRepetido').show();
            $('#btnbtnGuardarCambiosConfContrasena').attr('disabled',true);

          }
          else{


              $('#btnbtnGuardarCambiosConfContrasena').attr('disabled',false);
              

            }
      }

      else
      {
          

         $('#btnbtnGuardarCambiosConfContrasena').attr('disabled',true);

      }

}).error( function (data,status,headers,config) {



});


}

/*
$scope.verificarContrasena = function(contrasena)
{


  var data = {};
  data.contrasena = contrasena;

$http({

  url :'/cambiarCorreo',
  method: 'POST',
  data: data,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,headers,config) {

return data[0].result;

}).error( function (data,status,headers,config) {



});

}
*/


$scope.cambiarContrasena = function(contrasenaNueva,contrasenaVieja)
{

var obj = {};
obj.contrasenaNueva = contrasenaNueva;
obj.contrasenaVieja = contrasenaVieja;

$http({

  url :'/cambiarContrasena',
  method: 'POST',
  data: obj,
  headers:{'Content-Type':'application/json; charset=utf-8'}

}).success( function (data,status,headers,config) {

console.log(data[0].result);
if(data[0].result == 1)
{}
else if(data[0].result == 0)
{



}

}).error( function (data,status,headers,config) {



});

}


$scope.cambiarCorreo = function(contrasena,nuevoCorreo)
{
  var data = {};
  data.contrasena = contrasena;
  data.nuevoCorreo = nuevoCorreo;

$http({

  url :'/cambiarCorreo',
  method: 'POST',
  data: data,
  headers:{'Content-Type':'application/json; charset=utf-8'}
}).success( function (data,status,headers,config) {

 if(data[0].oResult == 1)
    $('#resultCambioCorreo').append('<span class="label label-success">Tu Correo ha sido cambiado</span>');
else
  $('#resultCambioCorreo').append('<span class="label label-danger">Información Erronea</span>');


}).error( function (data,status,headers,config) {



});

}




/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

$('.menuEdit').click(function(){

var id = $(this).attr('id');


if(id =='infPersonal')
{

/*

 $http({

   url:'/configuracionPersonal',
   method:'GET',
   headers :{'Content-Type':'application/json; charset=utf-8'}

  }).success( function (data,status,headers,config){

    $('#contenedorConfiguraciones').append(data); 
    $scope.nigga = 'a';






   

  }).error( function (data, status, headers, config){

  });

*/




  
/*
  $.get('/configuracionPersonal',function(data)
    {

//appYo.controller('allConfPersonal', function ($scope,$http,data) {

     $('#contenedorConfiguraciones').html(data); 
        /////////// funciiones para configuracionPersonal

       

        $('#btnUserImagen').click(function(){

                $('#userImagen').click();
                
            });


        $('#btnUserImagenPortada').click(function(){
          
          $('#userImagenPortada').click();

        });


          $('#btnEditarNombrePerfil').click(function(){

            

            $('#userNombreUsuario').prop('disabled',false);



          });


          $('#btnFinalizarGuardarPerfil').click(function(){

            var pais = $('#userPais').val();
            var ciudad = $('#userCiudad').val();
            var idioma = $('#userIdioma').val();

            
       

          });
  

//});

    });
*/

        /*

      var palabra;

         $("#userCiudad").bind("keypress change", function(e) {
            
            var kcode = e.keycode || e.which;
            var letra = String.fromCharCode(kcode);
            palabra += letra

            $('#myCiudad').text(palabra);

            
      });
*/


}
else
{



}

});










});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////// GENERAL CONTROLLER /////////////////////////
appYo.controller('allbody', function ($scope,$http) {



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



var content = 0;


$('.menuPerfilInformativa').click(function(){

if($(this).attr('id') == 'contactos')
{

if(content == 0){
$.get('/amigos',function(data)
{

$('#contenedorContenidoPerfil').html(data);

  $('#agregadosRecientemente').click(function()
      {
        
          
        $scope.getAgregosRecientemente();

      });
  

   $('#amigosGeneral').click(function()
      {
        
               $('#contenedorAmigos').empty(); 
         $scope.getUserAmigos();

      });
  
  $('#amigosComun').click(function(){
   $('#contenedorAmigos').empty(); 
        $scope.amigosComun();
  });
    $scope.getUserAmigos();
  



});
}


}

else if(  $(this).attr('id') == 'suscripciones' )
{

$.get('/suscripciones',function(data)
{
var id = $('.perfil').attr('id');
var idAmigo = $('.perfilAmigo').attr('id');

$('#contenedorContenidoPerfil').html(data);


$scope.getSuscripcionesUsuario(id,idAmigo);



 

});



}
else if( $(this).attr('id') == 'ranking'  )
{
  $.get('/ranking',function(data)
{

$('#contenedorContenidoPerfil').html(data);


});



}

else if( $(this).attr('id') == 'notas'  )
{

$.get('/notas',function(data)
{

$('#contenedorContenidoPerfil').html(data);

});


}
else if( $(this).attr('id') == 'respuestas'  )
{

$.get('/respuestas',function(data)
{

$('#contenedorContenidoPerfil').html(data);


});



}




});












///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////// POST ///////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////





$scope.getSuscripcionesUsuario = function(id,idAmigo)
{

  var object = {};
  object.id = id;
  object.idAmigo = idAmigo;

 
$http({

      url: '/suscripcionesUsuario',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
        
      $scope.nombre  = 'Hernan';
        
        for(var i = 0; i < data.length; i++)
        {

        $('#suscripcionesUsuario').append('<div id="'+data[i].id+'" class="col-md-2 cursos" style="border:1px solid red;"><img class="img-thumbnail" src="/images/yo.jpg" height="100" width="100" style="cursor:pointer;" ><p>Nombre: '+data[i].curso+'</p><p>Rama :'+data[i].rama+'</p></div>');

        }
        
      $('.cursos').click(function(){

        var id = $(this).attr('id'); 
/*        
         $.get('/',function(data)
          {

          });
*/
          window.location = '/cursos/'+id;



        });

      }).error( function (data,status,headers,config){



      });





}






$scope.cancelarPeticion = function(id,idAmigo)
{


var object = {};

object.id = id;
object.idAmigo = idAmigo;

$http({

      url: '/cancelarPeticion',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
       
        


      }).error( function (data,status,headers,config){



      });


}


$scope.amigosComun = function()
{



var object = {};


$http({

      url: '/getAmigosComun',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
        $('#contenedorAmigos').empty();
          for(var i  = 0; i< data.length; i++){
            
            $('#contenedorAmigos').append('<div id="'+data[i].idamigo+'" style="cursor:pointer;" class=" col-md-2 friends"><img src="/images/'+data[i].imagen+'" width="50px" height="50px"/>'+data[i].nombre+'</div>');
            
            }

          $('.friends').click(function()
            {

              window.location = '/perfil/' + $(this).attr('id');

            });
      }).error( function (data,status,headers,config){



      });


};



 $scope.getAgregosRecientemente = function()
 {


var object = {};


$http({

      url: '/getRecientementeAgregados',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
        $('#contenedorAmigos').empty();
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


$scope.u_aceptarVinculo = function(id,idAmigo)
{

var obj = {};
obj.id = id;
obj.idAmigo = idAmigo;


$http({

      url: '/u_aceptarVinculo',
      method: 'POST',
      data: obj,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
       
        alert(data);

      }).error( function (data,status,headers,config){



      });



}

$scope.u_noAceptarVinculo = function(id,idAmigo)
{

var obj = {};
obj.id = id;
obj.idAmigo = idAmigo;

$http({

      url: '/u_noAceptarVinculo',
      method: 'POST',
      data: obj,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
       
       alert(data);


      }).error( function (data,status,headers,config){



      });


}



$scope.u_crearVinculo = function(id,idAmigo)
{
var object = {};
object.id = id;
object.idAmigo = idAmigo;

$http({

      url: '/u_crearVinculo',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {
        $('#contenedorAmigos').empty();
          for(var i  = 0; i< data.length; i++){
            
            $('#contenedorAmigos').append('<div id="'+data[i].idamigo+'" style="cursor:pointer;" class=" col-md-2 friends"><img src="/images/'+data[i].imagen+'" width="50px" height="50px"/>'+data[i].nombre+'</div>');
            
            }

          $('.friends').click(function()
            {

              window.location = '/perfil/' + $(this).attr('id');

            });
      }).error( function (data,status,headers,config){



      });





};


///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

$("#dialog-confirm" ).hide();

$('#iLogin').click(function(){

alert('Click me');
  

});


//alert($('.isAmigo').attr('id'));
if($('.isAmigo').attr('id') == 'true'){
 
$('#btnAgregarAmigo').text('Vinculo Hecho');
$('#btnAgregarAmigo').removeClass('btn-success');
$('#btnAgregarAmigo').addClass('btn-default');

$('#btnAgregarAmigo').click(function(){

   alert('Des-anclar Vinculo hecho');

  });

}

else if($('.isAmigo').attr('id') == 'pendiente')
{


$('#btnAgregarAmigo').text('Vinculo Pendiente');
$('#btnAgregarAmigo').removeClass('btn-success');
$('#btnAgregarAmigo').addClass('btn-primary');
$('#btnAgregarAmigo').append(" <span class='caret'></span>");
$('#contenedorGroupAddAmigo').append("<ul class='dropdown-menu' style='cursor:pointer;'><li id='cancelarPeticion'>Cancelar Peticion</li><li></li></ul>");



$('#cancelarPeticion').click(function(){
  var id = $('.id').attr('id');
  var idAmigo = $('.perfilAmigo').attr('id');
    
 $("#dialog-confirm" ).show();

$(function() {

    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Si": function() {
          
          $scope.cancelarPeticion(id,idAmigo);
          $( this ).dialog( "close" );
        },

        No: function() {


          $( this ).dialog( "close" );


        }
      }
    });
  });

   


  });


}


else if($('.isAmigo').attr('id') == 'aVinculo')
{
//alert($('.isAmigo').attr('id'));

$('#btnAgregarAmigo').text('Aceptar Vinculo');
$('#btnAgregarAmigo').append(" <span class='caret'></span>");
$('#contenedorGroupAddAmigo').append("<ul class='dropdown-menu' style='cursor:pointer;'><li id='aceptarPeticion'>Aceptar Vinculo</li><li id='noAceptarPeticio'>No Aceptar Vinculo</li></ul>");

$('#aceptarPeticion').click(function(){

 var id = $('.perfil').attr('id');
  var idAmigo = $('.perfilAmigo').attr('id');
alert('asd');
//$scope.u_aceptarVinculo(id,idAmigo);

});

$('#noAceptarPeticion').click(function(){

$scope.u_noAceptarVinculo(id,idAmigo);

});


}

else if($('.isAmigo').attr('id') == 'false')
{


$('#btnAgregarAmigo').text('Crear Vinculo');
$('#btnAgregarAmigo').append(' <span class="glyphicon glyphicon-plus"></span>');

$('#btnAgregarAmigo').click(function(){
  var id = $('.perfil').attr('id');
  var idAmigo = $('.perfilAmigo').attr('id');

  $scope.u_crearVinculo(id,idAmigo);


  });


}




//alert($('.perfil').attr('id') + ' vs ' + $('.perfilAmigo').attr('id'))
if($('.id').attr('id') == $('.perfilAmigo').attr('id')){


 $('#btnAgregarAmigo').hide(); 
 /*
$('#btnEditarPerfil').click(function(){


 window.location = '/configuracionUsuario';


});
*/

}
else
{

$('#btnEditarPerfil').hide();
$('#btnAgregarAmigo').show();



}


$('.tipoCurso:first-child').addClass('primero');




});



/*
var appCursos = angular.module('cursos', []);

appYo.controller('yoBody', function ($scope,$http) {

  alert('');

  });

*/




//var appYo = angular.module('yo', []);








///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


 
appYo.controller('yoBody', function ($scope,$http) {

var valores = {};




$('#nombre').focusout(function(){

var nombre = $(this).val();

if(nombre.length > 3 && nombre != '')
  {

$(this).css('border-color','green')
  
    valores.nombre = 1;

  }

  else
  {

  $(this).css('border-color','red');
  
    valores.nombre = 0;

  }



});


$('#apellido').focusout(function(){

var apellido = $(this).val();

if(apellido.length > 3 && apellido != '')
  {

$(this).css('border-color','green')
valores.apellido = 1;

  }

  else
  {

  $(this).css('border-color','red');
  valores.apellido = 0;

  }


});


$('#correo').focusout(function(){

var correo = $(this).val();
nombreCorreo = correo.substr(0,correo.indexOf('@'));
tipoCorreo = correo.substr(correo.indexOf('@'),correo.indexOf('.'));

if(nombreCorreo.length < 4 || tipoCorreo.length < 6)
  { 

      $(this).css('border-color','red');
      valores.correo = 0;


  }
  else{

$scope.validateCorreo(correo);


}

});


$('#password').focusout(function(){

var password = $(this).val();

if(password.length > 4 && password != '')
  {

$(this).css('border-color','green')

valores.password = 1;
  }

  else
  {

  $(this).css('border-color','red');
  valores.password = 0;

  }


});






$('#formRegistro').submit(function()
  {

    var ano = $('#ano').val();
    var mes = $('#mes').val();
    var dia = $('#dia').val();
    var genero = $('#genero').val();
   

 if(valores.nombre == 1 && valores.apellido == 1 && valores.password == 1)
  {
    if(ano >= 1920 && mes >= 1 && dia >= 1 )
    {

    //alert('Tu registro  es correcto');


    var obj = {};
    obj.nombre = $('#nombre').val();
    obj.apellido = $('#apellido').val();
    obj.correo = $('#correo').val();
    obj.password = $('#password').val();
    obj.ano = ano;
    obj.mes = mes;
    obj.dia = dia;
    obj.genero = genero;

    $scope.registroAlumno(obj);


    }
  }
  else
  {

alert('Tu registro no puede ser procesado');

  }

  });



alert('asd');


$('#iLogin').click(function(){


$('#register').fadeOut(300);
$('#register').hide();

$.get('/loginForm',function(data){

$('#formulario').empty();
$('#formulario').html(data);

$('#form-signin').submit(function(){

var obj = {};
obj.usuario = $('#lUsuario').val();
obj.password = $('#lPassword').val();
if(obj.usuario.length > 3 && obj.password.length > 3)
{

$scope.loginValidate(obj)


return false;
}
else
{

return false;

}


});

});


  

});



////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
for(var i =1920; i < 2008;  i++ ){
$('#ano').append('<option value="'+i+'">'+i+'</option>');
}

for(var i =1; i <= 12;  i++ ){
$('#mes').append('<option value="'+i+'">'+i+'</option>');
}

for(var i =1; i <= 31;  i++ ){
$('#dia').append('<option value="'+i+'">'+i+'</option>');
}













//////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////// POST FUNCTIONS /////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////





$scope.registroAlumno = function(obj)
{

  var objTotal = {};
  objTotal.nombre = obj.nombre;
  objTotal.apellido = obj.apellido;
  objTotal.correo = obj.correo;
  objTotal.password = obj.password;
  objTotal.ano = obj.ano;
  objTotal.mes = obj.mes;
  objTotal.dia = obj.dia;
  objTotal.genero = obj.genero;



$http({

      url: '/u_registroAlumno',
      method: 'POST',
      data: objTotal,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {


         

      }).error( function (data,status,headers,config){



      });







}


$scope.validateCorreo = function(correo)
{

var object = {};
object.correo = correo;

$http({

      url: '/validateCorreo',
      method: 'POST',
      data: object,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {

         if(data[0].correo == 0)
          {

            $('#correo').css('border-color','green');


          }

        else
        {

          $('#correo').css('border-color','red');

        }

      }).error( function (data,status,headers,config){



      });




}



/*
$scope.registroValidate = function(obj)
{

$http({

      url: '',
      method: ,
      data: obj,
      headers :{'Content-Type':'application/json; charset=utf-8'}

      }).success( function (data,status,headers,config) {


      }).error( function (data,status,headers,config){



      });




}

*/




$scope.loginValidate = function(obj)
{

$http({

  url: '/loginValidate',
  method: 'POST',
  data: obj ,
  headers: {'Content-Type': 'application/json'}

  }).success( function (data, status, headers, config){


io = io.connect('http://localhost:3000');  

   if(data[0]['oUsuario'].length > 2)
   {

    var neg = 0;
    
    // call the server-side function 'adduser' and send one parameter (value of prompt)
    io.emit('addUser');

   

    if(neg == 0){
          window.location = '/perfil';
      }
   }
  else
  {

    

  }

  }).error( function (data, status, headers, config){



  });


}




});