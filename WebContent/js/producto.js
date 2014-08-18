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
	
	var totalPrice = 0;
	elementsCounter = 0;
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
			linkCategoria:$(".categoryLink")
	};
	
	
	var ordenarProducto = function(e){
		   
			elementsCounter++;
			e.preventDefault();
			
			botonClickedIndex = $(".product-button").index(this);
			alert(botonClickedIndex);
			getCurrentNombreProducto = $(".nombreProducto").get(botonClickedIndex);
			getCurrentPrecioProducto = $(".productPrice").get(botonClickedIndex);
			
			var currentProductoHtml = $(getCurrentNombreProducto).html();
			var currentPrecioHtml = $(getCurrentPrecioProducto).html();
			
			createSummaryHtml(currentProductoHtml,currentPrecioHtml,elementsCounter);
								
	};
	
	var createSummaryHtml = function(getCurrentNombreProducto,getCurrentPrecioProducto,index)
	 { 
		$('<div class="delete"><img src="/sodaSoftware/img/remove.png" alt="Delete"></div>').appendTo(".product");
		$('<div class="items-meta" id="items-meta'+index+'">'+'</div>').appendTo(".product");
		$('<span class="productItemName" id="productItemName'+index+'">'+'</span>').appendTo("#items-meta"+index);
		$('<span class="productItemPrice" id="productItemPrice'+index+'">'+'</span>').appendTo("#items-meta"+index);
		$('#items-meta'+index).find("#productItemName"+index).html(getCurrentNombreProducto);
		$('#items-meta'+index).find("#productItemPrice"+index).html(getCurrentPrecioProducto);
		
		totalPrice = totalPrice + parseInt(getCurrentPrecioProducto);
		$(".floatr").html(totalPrice);
	};
		
	var menuLinks = function (e){
		alert("este es el link");
		    e.preventDefault();
			var link = $(this);
			getProductosByCategoria(link.attr("href"));
			
	};
	this.attachEvents = function() {
		alert("attached");
        cache.linkCategoria.on("click",menuLinks);
		cache.btnOrdenar.on("click",ordenarProducto); 
    	
	};
};
};