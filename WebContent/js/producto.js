/**
 * 
 */

//Global object
var Producto = Producto || {};

Producto.Obj = function(idProductoPar,nombreProductoPar,precioProductoPar,descripcionProductoPar){

	var idProducto = idProductoPar;
	var nombreProducto = nombreProductoPar;
	var precioProducto = precioProductoPar;
    var descripcionProducto	= descripcionProductoPar;
	
    this.getIdProducto = function(){
		return idProducto;
	};
	
	this.getNombreProducto = function(){
		return nombreProducto;
	};
	
	this.getPrecioProducto = function(){
		return precioProducto;
	};
	
	this.getDescripcionProducto = function(){
		return descripcionProducto;
	};
	
};

Producto.Loader = function(){
	
	
	categoriesLink = "/sodaSoftware/main/categorias";
	var categorias = [];
	var productos = [];
	productoByCategoriaLink = "/sodaSoftware/main/allProductos/";
	
	var cache = {
			totalPriceHtml : $(".floatr")
	};
	
	_.templateSettings = {
		    evaluate    : /<[%@]([\s\S]+?)[%@]>/g,
		    interpolate : /<[%@]=([\s\S]+?)[%@]>/g,
		    escape      : /<[%@]-([\s\S]+?)[%@]>/g
	};
	
	this.getProductosByCategoria = function(idCategoria)
	{
		var producto;
		$.ajax({
			url: productoByCategoriaLink+idCategoria,
			type: 'GET',
			async: false,
			dataType: 'json'
		}).done(function(data, textStatus, jqXHR){
			if(jqXHR.status === 200){
				if(!$.isEmptyObject(data)){
					$.each( data, function (index, prod){
						producto = new Producto.Obj(prod.idProducto,prod.nombreProducto,prod.precioProducto,prod.descripcionProducto);
						productos.push(producto);
					});
				}
			}    
		});
		
		return productos;
	};
	
	this.getCategorias = function(){
		var categoria;
		$.ajax({
			url: categoriesLink,
			type: 'GET',
			async: false,
			dataType: 'json'
		}).done(function(data, textStatus, jqXHR){
			if(jqXHR.status === 200){
				if(!$.isEmptyObject(data)){
					$.each( data, function (index, cat){
						categoria = new Categoria.Obj(cat.idCategoria,cat.nombreCategoria);
						categorias.push(categoria);
					});
				}
			}    
		});
		
		return categorias;
	};
	
	this.fillMenuCategorias = function (){
		
		$menu = $(".menu_items");
		var menuCategorias = _.template($('#categoriaMenu-template').html(),{'categorias': categorias});
		$menu.append(menuCategorias);
		cache.totalPriceHtml.html("0");
	};
	
	this.fillProductosByCategoria = function (){
		
		$wrapper = $(".wrapper-product");
		var productosByCategoria = _.template($('#productosByCategoria-template').html(),{'productos': productos});
		$wrapper.append(productosByCategoria);
	};

Producto.UI = function (){
	
	var cache = {
			btnOrdenar:$(".product-button"),
			linkCategoria:$(".categoryLink"),
			btnBorrar: $(".delete"),
			totalPriceHtml : $(".floatr"),
			elementsCounter : 0
	};
	
	
	var ordenarProducto = function(e){
		   
			cache.elementsCounter++;
			e.preventDefault();
			
			botonClickedIndex = $(".product-button").index(this);
			getCurrentNombreProducto = $(".nombreProducto").get(botonClickedIndex);
			getCurrentPrecioProducto = $(".productPrice").get(botonClickedIndex);
			
			var currentProductoHtml = $(getCurrentNombreProducto).html();
			var currentPrecioHtml = $(getCurrentPrecioProducto).html();
			
			createSummaryHtml(currentProductoHtml,currentPrecioHtml,cache.elementsCounter);					
	};
	
	var createSummaryHtml = function(getCurrentNombreProducto,getCurrentPrecioProducto,index)
	 { 
		$('<div class="delete"><input type="button" class="deleteButton" onclick="borrarProducto();"></div>').appendTo(".product");
	
		$('<div class="items-meta" >'+'<span class="productItemName" id="productItemName">'+getCurrentNombreProducto+'</span>'
				+'<span class="productItemPrice" id="productItemPrice">'+getCurrentPrecioProducto+'</span>'+'</div>').appendTo(".product");
	
		
		var totalPrice = parseInt(cache.totalPriceHtml.html()) + parseInt(getCurrentPrecioProducto);
		$(".floatr").html(totalPrice);
		
	};
		
	var menuLinks = function (e){
		
		    e.preventDefault();
		    linkIndex = cache.linkCategoria.index(this)+1;
		    
			productoLoader = new Producto.Loader();
			$(".itemBox").remove();
			productoLoader.getProductosByCategoria(linkIndex);
			productoLoader.fillProductosByCategoria();
		
	};
	
	var borrarProducto = function (e){
	
			 e.preventDefault();
			 botonDeleteIndex = cache.btnBorrar.index(this);
			alert(botonDeleteIndex);
			 $(".delete").get(botonDeleteIndex).remove();
			 $(".items-meta").get(botonDeleteIndex).remove();
		 
	};
	
	
	this.attachEvents = function() {
        cache.linkCategoria.on("click",menuLinks);
		cache.btnOrdenar.on("click",ordenarProducto); 
	};
};
};