<!DOCTYPE html>

<html ng-app='all'>

<head>
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../docs-assets/ico/favicon.png">


 <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Yancuinc Ontli</title>

 <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
<link rel="icon" href="/images/favicon.ico" type="image/x-icon">
  <!--
  <link rel="stylesheet" type="text/css" href="css/themes/green.css">
  <link rel="stylesheet" type="text/css" href="css/themes/red.css">
  -->
 <link rel='stylesheet' href='http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css'>

  <link rel="stylesheet"  href="/css/font-awesome.min.css">

  <link rel="stylesheet"  href="/css/themes/blue.css">

  <link href="/css/carrousel.css" rel="stylesheet">




<link rel="stylesheet" href="/bootstrap/css/bootstrap.css"/>

<link rel='stylesheet' href='/js/select/select2.css'/>
 <link href="/css/dashboard.css" rel="stylesheet">
 <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
       <script src="/js/angular-route.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>

<script src='/js/function.js'></script>


<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<!-- <script src="http://code.highcharts.com/maps/highmaps.js"></script> -->
<script src="http://code.highcharts.com/mapdata/index.js?1"></script>

<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.js"></script>

<script src="http://www.highcharts.com/samples/maps/demo/all-maps/jquery.combobox.js"></script>

 
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/themes/base/jquery-ui.css" rel="stylesheet">
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

  <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
  <link rel="stylesheet"  href="/css/dashboard.css">
  <link rel="stylesheet" type="text/css" href="/css/themes/blue.css">



<script src="/bootstrap/js/bootstrap.js"></script>

<script src="/js/jquery-ui-1.10.4.custom.js"></script>
<script src="/js/jquery-ui-1.10.4.custom.min.js"></script>


<script src="/socket.io/socket.io.js"></script>
<script src='/js/ajaxupload.3.5.js'></script>
<script src='/js/select/select2.js'></script>


<script src="/js/highcharts.js"></script>
<script src="/js/highcharts-3d.js"></script>
<script src="/js/modules/exporting.js"></script>

 <script src="/js/ckeditor/ckeditor.js"></script>

 <script src="/js/d3.js"></script>
<!-- <script src='/js/the-basics.js'></script> -->
  <script src="http://cdn.oesmith.co.uk/morris-0.4.1.min.js"></script>
<script src='/js/jqautosize/jquery.autosize.js'></script>

<link rel="stylesheet" href="/css/cursos.css">




  <script type="text/javascript" src="/js/angular-cookies.js"></script>
  <script type="text/javascript" src="/js/ng-bootstrap-tpls.min.js"></script>
  <script type="text/javascript" src="/js/angular/bootstrap.js"></script>


<!--
<link rel='stylesheet' href='/js/ckeditor/contents.css'>
<script src='/js/ckeditor/ckeditor.js'></script>
<script src='/js/ckeditor/config.js'></script>
-->

<style>
@font-face{

  font-family: myLucidaFont;
  src: url('/fonts/lucidaBig.ttf');

}

@font-face{

  font-family: myriadpro;
  src: url('/fonts/MyriadPro-Regular.otf');

}

/* roboto fonts */
@font-face{

  font-family: roboto;
  src: url('/fonts/roboto/Roboto-Medium.ttf');

}

@font-face{

  font-family: roboto-c;
  src: url('/fonts/roboto/Roboto-Condensed.ttf');

}



/***************************/

.sidebar-list:hover{

  color:white;


}


#sidebar-wrapper
{

 font-family: roboto;

}

body{

  font-family: myLucidaFont;
  background-color: #f7f7f7;

}

textarea {
        border:2px solid #ccc;
        padding: 10px;
        vertical-align: top;
        width: 25%;
      }

      .animated {
        -webkit-transition: height 0.2s;
        -moz-transition: height 0.2s;
        transition: height 0.2s;
      }


.contenedorMensajesIdSub{
  height: 610px;
overflow-y:scroll;
overflow-x:hidden;

}

#contenedorMensajesId{

height: 700px;

}
.chatContenedor
{
height: 300px;
width: 300px;
border:1px solid #ccc;
border-radius:5px 5px 0px 0px;
background-color:white;
float:left;

}

.chat_header{

height: 30px;
background: #3498db;
text-align: center;
padding:4px;
color:white;
cursor:pointer;
}

.contenedorTextosChat{
  margin-bottom: 4px;
  padding-top:5px;
  padding-bottom: 5px;
  height: 190px;
  overflow-y: scroll;
  overflow-x:none;


}

.content_text_chat_friend
{
 color:#ecf0f1;
 width: 245px;
 padding:5px;
 background: #95a5a6;
 margin-left:25px;
 border-radius:50px 10px 10px 50px;
 margin-bottom: 5px;
 padding-right: 10px;
 word-wrap:break-word;

}

.content_text_chat_me
{
 
 color:#ecf0f1;
 margin-left:25px;
 width: 245px;
 padding:5px;
 background: #3498db;
border-radius:10px 50px 50px 10px;
 margin-bottom:5px;
  padding-left: 10px;
word-wrap:break-word;

}
.text_send{

  width: 250px;

}

.text_area_chat
{

width: 300px;
bottom:0px;
position:absolute;
max-width: 300px;
min-width: 300px;
max-height: 60px;


}

.submenur:hover{color:red;}

  #subContenedorPerfil{

    margin-top:0px;  margin-left:260px; width:1600px; background-color:#ffffff; height: 900px;
    /*background-color:#ffffff; */
  }


 @media screen and (min-width: 1200px) and (max-width: 1600px) {

#subContenedorPerfil{

margin-top:0px; margin-left:260px; width:1200px; background-color:#ffffff;

}


 }

 @media screen and (min-width: 800px) and (max-width: 1199px) {

#subContenedorPerfil{

margin-top:0px; margin-left:260px; width:800px; background-color:#ffffff;

}
}

.widget
{
    border-radius:5px;

}
.widget-title{
  border-radius:5px 5px 0px 0px;
  background-color: white;


}



</style>



</head>



<!-- <body ng-controller='allbody'> -->
<body ng-controller="MasterCtrl">
  <div id="page-wrapper" ng-class="{'active': toggle}" ng-cloak>

    <!-- Sidebar -->

    <div id="sidebar-wrapper" style='background:#044265; border-right:1px solid #ecf0f1;'>
      <ul class="sidebar" >
        <li class="sidebar-main">
          <a href="#" ng-click="toggleSidebar()" style='background-color:#04517c;'>
            <!--<img src='/images/yanci3.png' height='30' width='160'> -->
            <span style='font-family:myriadpro;'>Yancuic Ontli</span>

            <span class="menu-icon glyphicon glyphicon-transfer"></span>
          </a>
        </li>

        <li class="sidebar-title"><span>Menu</span></li>
        <li class="sidebar-list" id='listPerfil'>
          <a href="#" style=''>Perfil <span class="menu-icon fa fa-user"></span></a>
          <ul class="nav nav-second-level" >
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
        </li>
        <li class="sidebar-list">
          <a href="/mixtli" style=''>Mixtli <span class="menu-icon fa fa-cloud"></span></a>
        </li>
        <li class="sidebar-list">
          <a href="#" style=''>Mis Cursos<span class="menu-icon fa fa-film"></span></a>
        </li>
        <li class="sidebar-list">
          <a href="/foro" style=''>Foro<span class="menu-icon fa fa-list"></span></a>
        </li>
        <li class="sidebar-list">
          <a href="/desarrollo-en-linea" style=''>Desarrollo en linea<span class="menu-icon fa fa-briefcase"></span></a>
        </li>
        <li class="sidebar-title separator"><span>Chat</span></li>
      
      </ul>
      <div class="sidebar-footer" style='background-color:#04517c;'>
        <div class="col-xs-8" style='padding:5px;'>
          
            <input type='text' class='form-control' placeholder='Buscar Amigo'/>
          
        </div>
  
        <div class="col-xs-4">
          <a href="#">
            Support
          </a>
        </div>
      </div>
    </div>

    <!-- End Sidebar -->

    <div id="content-wrapper">
      <div class="page-content">

        <!-- Header Bar -->

        <div class="row header" style='background:#04517c; box-shadow: 0px 1px 5px #95a5a6;'>
          <div class="col-xs-12">
    

            <div class="user pull-right">


              <div class="item dropdown">
                <a href="#" class="dropdown-toggle">
                  <img src='/images/<%=imagenLogin %>' class="img-circle">
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    <%=realname %>
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="/perfil">
                      Perfil
                    </a>
                  </li>
                  <li class="link">
                    <a href="#">
                      Configuración
                    </a>
                  </li>
                  <li class="link">
                    <a href="#">
                      Menu Item
                    </a>
                  </li>
                  <li class="divider"></li>
                  <li class="link">
                    <a href="#">
                      Cerrar Sesión
                    </a>
                  </li>
                </ul>               
              </div>
              <div class="item dropdown">
               <a href="#" class="dropdown-toggle">
                  <i class="ion-earth" style='color:white;'></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-header">
                    Notifications
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Chat Down</a>
                  </li>
                </ul>
              </div>

             <div class="item dropdown">
               <a href="#" class="dropdown-toggle">
                  <i class="ion-android-book" style='color:white;'></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" id='listRamas'>
                  <li class="dropdown-header">
                    Cursos
                  </li>
                  <li class="divider"></li>
                  <li>
                   
                  </li>
                </ul>
            </div>

            </div>

            <div class="meta pull-right">
              <div class="page">
                  <div class="input-group">
               <input type='text' placeholder='Busca gente, enlaces o posts' class='form-control'>
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button"><i class='ion-search'></i></button>
                </span>
              </div><!-- /input-group -->
            
            
            </div>
          </div>


          </div>
        </div>


<!--
 <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style='background-color:#ffffff; color:#bdc3c7;border:none;'>
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand"  style ='color:#bdc3c7; font-size:13px;' href="/"><img src='/images/yancilogo.png' height="23px" width="145px"></a>
            <a href="/cursos" class='navbar-brand' style ='color:#34495e; margin-left:50px; font-size:14px;'>Cursos</a>
            <a href="#" class='navbar-brand' style ='color:#34495e; font-size:14px;'><span  style='color:#34495e;  font-size:14px;' class='glyphicon glyphicon-user'></span></a>
            <a href="#" class='navbar-brand' style ='color:#34495e; font-size:14px;'><span  style='color:#34495e;  font-size:14px;'class='glyphicon glyphicon-comment'></span></a>
            <a href="#" class='navbar-brand' style ='color:#34495e; font-size:14px;'><span style='color:#34495e;  font-size:14px;' class='glyphicon glyphicon-globe'></span></a>
            <a  href="/foro" class='navbar-brand' style ='color:#34495e;  font-size:12px;'> <span style='color:#34495e;  font-size:14px;' class='glyphicon glyphicon-th-large'></span> Foro</a>
          <a class='perfilAmigo' id='<%= idAmigo %>' ><a/>
          <a class='isAmigo' id='<%= isAmigo %>' ><a/>
          <a class='id' id='<%= id %>'></a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a style='color:#34495e;  font-size:12px;' href="#">FAQ</a></li>
              <a class="navbar-brand"  style ='color:#34495e; font-size:13px;' href="/perfil"><img src='/images/<%=imagenLogin %>' height="20px" width="25px">
            <span style='color:#34495e;  font-size:12px;' id='nombreUsuario' ng-model='nombreUsuario'><%= realname %></span></a>

          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </div>
-->

  <!-- import new 
	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style='background-color:#F9FAF7; color:#fffff;border:none;'>
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          
          <a class="navbar-brand"  style ='color:#6f6f6f; font-size:13px;' href="/"><img src='/images/yanci.png' height="23px" width="145px"></a>
          <a class="navbar-brand"  style ='color:#6f6f6f; font-size:13px;' href="/cursos" id='cursos'>Cursos</a>
          <a class="navbar-brand"  style ='color:#6f6f6f; font-size:13px;' href="/">Busca Amigos</a>
          <a class="navbar-brand"  style ='color:#6f6f6f; font-size:13px;' href="">Chat</a>
          <a class='perfilAmigo' id='<%= idAmigo %>' ><a/>
          <a class='isAmigo' id='<%= isAmigo %>' ><a/>
          <a class='id' id='<%= id %>'></a>
          {{}}

        </div>
        <div class="navbar-collapse collapse">


        <div class="navbar-right">
           
           <a class="navbar-brand"  style ='color:#6f6f6f; font-size:13px;' href="/perfil">FAQ</a>
           <a class="navbar-brand"  style ='color:#6f6f6f; font-size:13px;' href="/perfil"><img src='/images/<%=imagenLogin %>' height="20px" width="25px">
            <span id='nombreUsuario' ng-model='nombreUsuario'><%= realname %></span></a>

         </div>
        </div>
      </div>
    </div>

    -->
    <script src="/socket.io/socket.io.js"></script>
<script>

io = io.connect('http://localhost:3000');  

io.on('connection',function(data){

console.log(data);

});

io.on('usersChat',function(data){


console.log(data.sId);

});


io.emit('chat-in','Luisito');

io.on('mensaje',function(data){

console.log(data);


});

io.on('alerts',function(data){

console.log(data.mensaje);

});


io.on('tester',function(data){

var id = $('.id').attr('id');
console.log(id)


 $('#contenedorMensajesIdSub'+data[0]['id_usuario']+'_'+data[0]['iId_user_to']).append('<div class="row" style="margin-top:10px;"><div class="col-md-1"><img src="/images/'+data[0]['imagen']+'" width="30" height="30"/></div><div class="col-md-8" style=" padding-left:50px;"><span style="color:#676767;"><strong>'+data[0]['nomcom']+'</strong></span><br>'+data[0]['iChat_post']+'</div></div>');

 $('#contenedorMensajesIdSub'+data[0]['iId_user_to']+'_'+data[0]['id_usuario']).append('<div class="row" style="margin-top:10px;"><div class="col-md-1"><img src="/images/'+data[0]['imagen']+'" width="30" height="30"/></div><div class="col-md-8" style=" padding-left:50px;"><span style="color:#676767;"><strong>'+data[0]['nomcom']+'</strong></span><br>'+data[0]['iChat_post']+'</div></div>');




////////////////////////////////////////////// CHAT IZQUIERDO /////////////////////////////////////////////////////




 $('#'+data[0]['id_usuario']+'_'+data[0]['iId_user_to'] +' .contenedorTextosChat').append('<div class="content_text_chat_me">'+data[0]['iChat_post']+'</div>');


 $('#'+data[0]['iId_user_to']+'_'+data[0]['id_usuario'] +' .contenedorTextosChat').append('<div class="content_text_chat_friend">'+data[0]['iChat_post']+'</div>');



/*****************************************************************************/

var divCombination1 = data[0]['iId_user_to']+'_'+data[0]['id_usuario'];
var divCombination2 = data[0]['id_usuario']+'_'+data[0]['iId_user_to'];


var divScrolling1 = document.getElementById('contenedorTextosChat'+divCombination1);
var divScrolling2 = document.getElementById('contenedorTextosChat'+divCombination2);

if(divScrolling1)
{
var tamanoDiv1 = divScrolling1.scrollHeight;

$('#contenedorTextosChat'+divCombination1).scrollTop(tamanoDiv1);
}
else if(divScrolling2)
{
var tamanoDiv2 = divScrolling2.scrollHeight;
$('#contenedorTextosChat'+divCombination2).scrollTop(tamanoDiv2);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var divUno = document.getElementById('contenedorMensajesIdSub'+data[0]['id_usuario']+'_'+data[0]['iId_user_to']);
var divDos = document.getElementById('contenedorMensajesIdSub'+data[0]['iId_user_to']+'_'+data[0]['id_usuario']);

if(divUno)
{
var tamanoScrollin = divUno.scrollHeight;
$('div#contenedorMensajesIdSub'+data[0]['id_usuario']+'_'+data[0]['iId_user_to']).scrollTop(tamanoScrollin);

}
else if(divDos)
{
var tamanoScrollin2 = divDos.scrollHeight;
$('div#contenedorMensajesIdSub'+data[0]['iId_user_to']+'_'+data[0]['id_usuario']).scrollTop(tamanoScrollin2);
}

});

/*
  var idAmigoRoom = $('.id').attr('id');
  console.log(idAmigoRoom);

  window.scrollTo(0, document.body.scrollHeight);

  */
  //io.emit('createRoom',idAmigoRoom);
  


    // call the server-side function 'adduser' and send one parameter (value of prompt)
    //




/*
io.on('connectUser',function(data){

 console.log(data.id+" Y : "+ data.other);

});
*/

/*
io.on('lapizero', function(data) {
    console.log(data);

    
});

*/

/*

io.emit('waiting','Pedro hernan');

io.on('respinse',function(data){

  console.log(data);
$('#footer').append('');
$('#footer').append('<p>'+data.id+'</p>');

});
*/


io.on('update',function (data){

 console.log(data.id);
 
$('#footer').append('');
$('#footer').append('<p>'+data.id+'</p>');

  //console.log(data['id'].length);
});

io.on('greeting', function(data) {
   
    console.log(data.id);
    
});


io.on('disconnection',function(data){

console.log(data.id_disconnect);

});

</script>


@yield('content')

</body>
</html>