/**
 * 
 */

//Global object
var Producto = Producto || {};


Producto.Loader = function(){
	
	var cache = {
		btnOrdenar:$(".product-button"),
		nombreProducto:$(".nombreProducto").html()
	};
	
	
	this.listen = function(){
		
		cache.btnOrdenar.click(function(e)
				{
					e.preventDefault();
					
					botonClickedIndex = $(".product-button").index(this);
					
					getCurrentNombreProducto = $(".nombreProducto").get(botonClickedIndex);
					getCurrentPrecioProducto = $(".productPrice").get(botonClickedIndex);
					
					var currentProductoHtml = $(getCurrentNombreProducto).html();
					var currentPrecioHtml = $(getCurrentPrecioProducto).html();
					
					alert(currentProductoHtml);
					alert(currentPrecioHtml);
					
				});
	};
	
};