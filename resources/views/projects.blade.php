@extends('master')

@section('content')

<style>
.productos
{
 height: 350px;
 border:1px solid white;
 border-radius:4px;
 background-color: white;
 padding: 0px;
 margin-left: 30px;


}

.bottom-productos{
 
 position:absolute;
 bottom:1px;
 height:50px;
 background-color: #2980B9;
 padding: 0px;
 border-radius: 0px 0px 4px 4px;
 color:#ecf0f1;

}

.bottom-productos-bio
{

	 position:absolute;
 bottom:1px;
 height:50px;
 background-color: #16a085;
 padding: 0px;
 border-radius: 0px 0px 4px 4px;
 color:#ecf0f1;
}
.titulo-productos
{
	background-color: #34495e;
	border-radius:4px 4px 0px 0px;
	color:white;

}

.lateral-derecho-producto{

	height: 100%;
	background-color: #ecf0f1;
	border-radius:0px 0px 4px 0px;
	text-align:center;
	padding: 6px;
	cursor:pointer;
	color:#2980B9;

}

.lateral-derecho-producto-bio{

	height: 100%;
	background-color: #ecf0f1;
	border-radius:0px 0px 4px 0px;
	text-align:center;
	padding: 6px;
	cursor:pointer;
	color:#16a085;

}

.imagen-producto{
	height: 110px;
	background-image: url(/images/biology.jpg);
	background-size: 100% 100%;

}

.info-producto{

	height: 150px;
	padding: 0px;
	color:#7f8c8d;


}

</style>

<div class="container-fluid" ng-controller="dash-productos">

<div class="row">
	<div class="col-md-2" style=" background-color:#2980B9; color:white; cursor:pointer;  height:58px;">
	 <h4>Scients & Technology</h4>
	</div>
	<div class="col-md-2" style="background-color:#16A085; color:white; cursor:pointer; height:58px;">
	 <h4>Healt & Biology</h4>
	</div>
	<div class="col-md-2" style="background-color:#F39C12; color:white; cursor:pointer; height:58px;">
	 <h4>Humanity and Sociality</h4>
	</div>
	<div class="col-md-2" style="background-color:#c0392b; color:white; cursor:pointer; height:58px;">
	 <h4>Scients & Technology</h4>
	</div>
	<div class="col-md-2" style="background-color:#8e44ad; color:white; cursor:pointer; height:58px;">
	 <h4>Scients & Technology</h4>
	</div>
	<div class="col-md-2" style="background-color:#7f8c8d; color:white; cursor:pointer; height:58px;">
	 <h4>Scients & Technology</h4>
	</div>

</div>

<div class="row">
  <div class="col-md-3 productos">
  <div class="col-md-12 titulo-productos">
  <h5>RoboLab</h5>
  </div>
  <div class="col-md-12 imagen-producto">

  		</div>
  		<div class="col-md-12 info-producto">
  				<p>Este es un nuevo proyecto de ciencia y tecnologia Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt u
  				</p>
  		</div>
  
 
	  <div class="col-md-12 bottom-productos-bio">
	 	 <div class="col-md-9"><span><i class="ion-eye"></i> 10</span></div>
	 	 <div class="col-md-3  lateral-derecho-producto-bio"><i class="ion-heart" style="font-size:25px; "></i></div>
	  </div>
  </div>

   <div class="col-md-3 productos">
  		<div class="col-md-12 titulo-productos">
  			<h5>RoboLab</h5>
  		</div>
  		<div class="col-md-12 imagen-producto">

  		</div>
  		<div class="col-md-12 info-producto" >
  				<p>Este es un nuevo proyecto de ciencia y tecnologia Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  				tempor incididunt u
  				</p>
  		</div>
  
	  <div class="col-md-12 bottom-productos">
	 	 <div class="col-md-9"><span title="Views" style="font-size:14px;"><i class="ion-eye"></i> 10</span><br><span style="font-size:12px;"><i class="ion-calendar"> 20/05/2015</i></span></div>
	 	 <div class="col-md-3  lateral-derecho-producto"><i class="ion-heart" style="font-size:25px; "></i></div>
	  </div>
  </div>



</div>

</div>

@stop