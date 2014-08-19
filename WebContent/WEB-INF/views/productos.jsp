<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://underscorejs.org/underscore.js"></script>
<script src="/sodaSoftware/js/main.js"> </script>
<script src="/sodaSoftware/js/producto.js"> </script>
<script src="/sodaSoftware/js/categoria.js"> </script>
<link rel="stylesheet" type="text/css" href="/sodaSoftware/css/main.css">
<meta charset="ISO-8859-1">
<title>Marmota's Place</title>
</head>
<body>
<header id="page_header">
<div class="logo"></div>
</header>
	<div class="main_container">
		<div class="order_container">
			<div class="clearFloat"></div>
			<div class="col-left">
				<h2 class="navigation_title">Men&uacute;</h2>
				<div id="menu-admin">
				<ul class="menu_items">
					<script type="text/html" id="categoriaMenu-template">
						<@  
							 for(var i = 0; i < categorias.length; i++) {
						@>
						<li class="categoryLi"><a class="categoryLink" href="#"><@=categorias[i].getNombreCategoria()@></a></li>
						<@ }@>
					</script>
				</ul>	
				</div>
			</div>
			<div class="col-right">
				<div id="menu_ProductContent" class="colRightLeft menuProductContent">
					<div id="menu_ProductContent">
						<div id="productContent">
							<div id="wrapper-product-uber">
								<div class="wrapper-product-category">
									<div id="categoriaActual" class="title" style="clear: both;">
										<span></span>
									</div>
									<div class="wrapper-product">
										<script type="text/html" id="productosByCategoria-template">
										<@  
										  for(var i = 0; i < productos.length; i++) {
										@>
										<div class="itemBox">
											<div class="information-container">
												<div class="productName" id="divProducto">
													<p class="nombreProducto"><@=productos[i].getNombreProducto()@></p>
												</div>
												<div class="itemPriceCalories">
													<div style="float:right; text-align: right; width: 100px">
														<div>
															<span class="productPrice"><@=productos[i].getPrecioProducto()@></span>
														</div>
													</div>
												</div>
												<div class="product-button-div">
													<span><input type="button" class="product-button" value="Ordenar" id="btnOrdenar"></span>
												</div>
											</div>	
										</div><!--q se repita  -->
										<@}@>
										</script>
									</div>
								</div>
							</div>
						 </div>
					</div>
				</div>
				<div id="orderDetailsAndSummary" class="colRightRight">
					<div class="orderPanel">
					  <form:form modelAttribute="newOrder" class="form-horizontal" action="/main/createOrden">
							<div class="orderHead">
								<h3>
									<a href="#">Detalle Orden</a>
								</h3>
							</div>
							<div class="orderContent" id="fav_orderDetail" style="display: block;">
								<div class="order details">
									<div class="floatl">
										<p class="orderDetailsBlock">Fecha: &nbsp;</p>
									</div>
									<p class="orderDetailsBlock" id="fechaOrden"></p>
									<form:input type="hidden" path="fechaOrden" id="fechaOrdenValue"/>
									<div class="floatl">
										<p class="orderDetailsBlock" id="cajero">Cajero: &nbsp;</p>
									</div>
									<p class="orderDetailsBlock">
										Carlos Hernandez
									</p>
									
								</div>
							</div>
							<div class="orderHead">
								<h3>
									<a href="#">Resumen Orden</a>
								</h3>
							</div>
							<div class="orderContent" id="fav_orderSummary">
								<div class="summary details">
								  <div class="product"></div>	
									<div class="total details">
										<div class="item">
											<strong>Total</strong>
											<span class="floatr"></span>
										</div>
										<hr>
										<div id="divFinalizar" style="float:right; padding-top: 20px;">
											<input type="submit" value="Finalizar" class="btn-2">
										</div>
									</div>
								</div>
							</div>
						</form:form>
					</div><!--fin orderPanel-->
				</div>
			</div>
		</div>
	</div>
</body>
</html>