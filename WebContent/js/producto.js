/**
 * 
 */

//Global object
var Producto = Producto || {};
var counter = 0;
var index = 0;
var categorias = [];

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
	var productos = [];
	
	categoriesLink = "/sodaSoftware/main/categorias";
	productoByCategoriaLink = "/sodaSoftware/main/allProductos/";
	
	var cache = {
			totalPriceHtml : $(".floatr"),
			fechaActual: $("#fechaOrden")
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
		
		var fechaActual = new Date();
		formatedFechaActual =  fechaActual.getDate()+"/"+(fechaActual.getMonth()+1)+"/"+fechaActual.getFullYear();
		
		$menu = $(".menu_items");
		var menuCategorias = _.template($('#categoriaMenu-template').html(),{'categorias': categorias});
		$menu.append(menuCategorias);
		cache.totalPriceHtml.html("0");
		//set fechaActual
		cache.fechaActual.html(formatedFechaActual);
		$("#fechaOrdenValue").val(fechaActual);
		
	};
	
	this.fillProductosByCategoria = function (){
		
		$wrapper = $(".wrapper-product");
		var productosByCategoria = _.template($('#productosByCategoria-template').html(),{'productos': productos});
		$wrapper.append(productosByCategoria);
	};

};	


Producto.UIManager = function (){
	
	var cache = {
			totalPriceHtml : $(".floatr"),
			btnOrdenar:$(".wrapper-product"),
			btnBorrar: $(".delete"),
			btnFinalizar:$(".btn-2")
	};
	
	var borrarProducto = function (e){
	
	 e.preventDefault();
	 botonDeleteIndex = cache.btnBorrar.index(this)+1;
	
	 $('#delete'+botonDeleteIndex).remove();
	 $('#items-meta'+botonDeleteIndex).remove();

	};
	
	var ordenarProducto = function(e){
		   
		counter++;
		
		e.preventDefault();
		
		botonClickedIndex = $(".product-button").index(this);
		getCurrentNombreProducto = $(".nombreProducto").get(botonClickedIndex);
		getCurrentPrecioProducto = $(".productPrice").get(botonClickedIndex);
		getCurrentIdProducto = $(".idProducto").get(botonClickedIndex);
		
		var currentProductoHtml = $(getCurrentNombreProducto).html();
		var currentPrecioHtml = $(getCurrentPrecioProducto).html();
		var currentIdProducto = $(getCurrentIdProducto).val();
		
			
		createSummaryHtml(currentProductoHtml,currentPrecioHtml,currentIdProducto,counter);
		var uiManager = new Producto.UIManager(); 	
		uiManager.attachEventBorrar();
		
};

var createSummaryHtml = function(getCurrentNombreProducto,getCurrentPrecioProducto,getCurrentIdProducto,counter)
{ 
	index=counter-1;
	
	$('<div class="delete" id="delete'+counter+'"'+'><img src="/sodaSoftware/img/remove.png" alt="Delete"></div>').appendTo(".product");
	$('<div class="items-meta" id="items-meta'+counter+'"'+'><span class="productItemName" id="productItemName">'+getCurrentNombreProducto+'</span>'
	+'<input type="hidden" name="productos'+"["+index+'].idProducto'+'"'+'value="'+getCurrentIdProducto+
	'"'+'/>'+'<span class="productItemPrice" id="productItemPrice">'+getCurrentPrecioProducto+'</span></div>').appendTo(".product");
	
	
	var totalPrice = parseInt(cache.totalPriceHtml.html()) + parseInt(getCurrentPrecioProducto);
	$(".floatr").html(totalPrice);
	
	
	$("#totalOrden").val(totalPrice);
	
};

var finalizarOrden= function(){
	
	alert("la Orden se realizó correctamente"); 
};
	
	this.attachEventOrdenar = function() {
        
        cache.btnOrdenar.on("click",".product-button",ordenarProducto);
    };
    this.attachEventBorrar = function() {
        cache.btnBorrar.on("click",borrarProducto);
    };
    
    this.attachEventFinalizar = function() {
        cache.btnFinalizar.on("click",finalizarOrden);
    };
};

	
Producto.UI = function (){
	
	var cache = {
			
			linkCategoria:$(".categoryLink")
	};
	
		
	var menuLinks = function (e)
	{
		    e.preventDefault();
		    linkIndex = cache.linkCategoria.index(this)+1;
			productoLoader = new Producto.Loader();
			$(".itemBox").remove();
			productoLoader.getProductosByCategoria(linkIndex);
			productoLoader.fillProductosByCategoria();
		
	};
	
	this.attachLinkCategoriaEvent = function() {
       cache.linkCategoria.on("click",menuLinks);
			
	};
};