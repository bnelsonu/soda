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
			totalPrice : 0,
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
		alert(index);
		$('<div class="delete"><img src="/sodaSoftware/img/remove.png" alt="Delete"></div>').appendTo(".product");
		$('<div class="items-meta" id="items-meta'+index+'">'+'</div>').appendTo(".product");
		$('<span class="productItemName" id="productItemName'+index+'">'+'</span>').appendTo("#items-meta"+index);
		$('<span class="productItemPrice" id="productItemPrice'+index+'">'+'</span>').appendTo("#items-meta"+index);
		$('#items-meta'+index).find("#productItemName"+index).html(getCurrentNombreProducto);
		$('#items-meta'+index).find("#productItemPrice"+index).html(getCurrentPrecioProducto);
		
		cache.totalPrice = cache.totalPrice + parseInt(getCurrentPrecioProducto);
		$(".floatr").html(cache.totalPrice);
	};
		
	var menuLinks = function (e){
		
		    e.preventDefault();
		    linkIndex = cache.linkCategoria.index(this)+1;
						
			productoLoader = new Producto.Loader();
			$(".itemBox").remove();
			productoLoader.getProductosByCategoria(linkIndex);
			productoLoader.fillProductosByCategoria();
			cache.btnOrdenar.on("click",ordenarProducto); 
			/*var productosUI = new Producto.UI();
			productosUI.attachEvents();*/
	};
	this.attachEvents = function() {
		
        cache.linkCategoria.on("click",menuLinks);
		cache.btnOrdenar.on("click",ordenarProducto); 
    	
	};
};
};