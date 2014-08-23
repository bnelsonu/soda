/**
 * 
 */

//Global object
var Producto = Producto || {};
var counter = 0;
var index = 0;
var categorias = [];
var productos = [];
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
			btnOrdenar:$(".product-button"),
			btnBorrar: $(".delete")
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
		
		var currentProductoHtml = $(getCurrentNombreProducto).html();
		var currentPrecioHtml = $(getCurrentPrecioProducto).html();
		
		createSummaryHtml(currentProductoHtml,currentPrecioHtml,counter);
		var uiManager = new Producto.UIManager(); 	
		uiManager.attachEventBorrar();
		
};

var createSummaryHtml = function(getCurrentNombreProducto,getCurrentPrecioProducto,counter)
{ 
	index=counter-1;
	
	$('<div class="delete" id="delete'+counter+'"'+'><img src="/sodaSoftware/img/remove.png" alt="Delete"></div>').appendTo(".product");
	$('<div class="items-meta" id="items-meta'+counter+'"'+'><span class="productItemName" id="productItemName">'+getCurrentNombreProducto+'</span>'
	+'<input type="hidden" name="productos'+"["+index+'].idProducto'+'"'+'value="'+getIdProducto(getCurrentNombreProducto)+
	'"'+'/>'+'<span class="productItemPrice" id="productItemPrice">'+getCurrentPrecioProducto+'</span></div>').appendTo(".product");
	
	
	var totalPrice = parseInt(cache.totalPriceHtml.html()) + parseInt(getCurrentPrecioProducto);
	$(".floatr").html(totalPrice);
	
	
	$("#totalOrden").val(totalPrice);
	
};
var getIdProducto = function (nombreProducto){
	
	var idProducto = 0;
		
	for( var i=0; i<productos.length;i++){
		if (productos[i].getNombreProducto() === nombreProducto){
			 idProducto = productos[i].getIdProducto();
			break;
		}
	}	
	
	return idProducto;
};
	
	this.attachEventOrdenar = function() {
        
        cache.btnOrdenar.on("click",ordenarProducto);
    };
    this.attachEventBorrar = function() {
        cache.btnBorrar.on("click",borrarProducto);//antes solo este
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
			var productosUIManager = new Producto.UIManager();
			productosUIManager.attachEventOrdenar();
		
	};
	
	this.attachLinkCategoriaEvent = function() {
       cache.linkCategoria.on("click",menuLinks);
			
	};
};