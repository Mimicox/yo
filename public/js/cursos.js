var appYo = angular.module('all',  ['ui.bootstrap', 'ngCookies']);
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
                 '<span class="titulo-curso" style="font-size:0.9em;"><b>Curso de programación en php básico</b></span>'+
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

      }
 
     


    }).error( function (data,status,config,headers)
    {
      console.log(status);

    });

    }

 console.log('asd');

    $scope.getCursosMasivos();

    

  });
