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
					
					createSummaryHtml(currentProductoHtml,currentPrecioHtml);
					
					alert(currentProductoHtml);
					alert(currentPrecioHtml);
					
				});
	};
	
	 var createSummaryHtml = function(getCurrentNombreProducto,getCurrentPrecioProducto){
		
		summaryDetails= $(".summary .details");
		var deleteClass = $(".delete"); //obtenemos el div delete que contiene el boton delete
	    $(".items-meta").find(".productItemName").html(getCurrentNombreProducto);
	    $(".items-meta").find(".productItemPrice").html(getCurrentPrecioProducto);
	    
	    
	    summaryDetails.append(deleteClass);
		
	};		
};