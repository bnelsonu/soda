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
			fechaActual: $("#fechaOrden"),
			horaActual: $("#horaOrden")
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
		horaActual = fechaActual.getHours()+":"+ fechaActual.getMinutes();
		
		$menu = $(".menu_items");
		var menuCategorias = _.template($('#categoriaMenu-template').html(),{'categorias': categorias});
		$menu.append(menuCategorias);
		cache.totalPriceHtml.html("0");
		//set fechaActual
		cache.fechaActual.html(formatedFechaActual);
		$("#fechaOrdenValue").val(fechaActual);
		cache.horaActual.html(horaActual);
		
	};
	
	this.fillProductosByCategoria = function (){
		
		$wrapper = $(".wrapper-product");
		var productosByCategoria = _.template($('#productosByCategoria-template').html(),{'productos': productos});
		$wrapper.append(productosByCategoria);
	};

};	


Producto.UIManager = function ()
{
	
	var cache = 
	{
			totalPriceHtml : $(".floatr"),
			btnOrdenar:$(".wrapper-product"),
			btnBorrar: $(".delete"),
			btnFinalizar:$(".btn-2"),
			productDiv:$(".product"),
			totalPrice:0
	};
	
	var borrarProducto = function (e)
	{
	
		 e.preventDefault();
		 botonDeleteIndex = $(".delete").index(this);

		 $($(".delete").get(botonDeleteIndex)).remove();
		 $($(".items-meta").get(botonDeleteIndex)).remove();
		  
		 reassignToProductos();
		 reassignTotalAmount();
	};
	
	
	var reassignToProductos = function ()
	{
		
		var cantidadProductos = $(".items-meta >:input").length;
		
		for (var i=0; i<cantidadProductos;i++)
		{
		  $($(".items-meta >:input").get(i)).attr('name','productos['+i+'].idProducto');
		}
	};
	
	
	var reassignTotalAmount = function ()
	{
		cache.totalPrice = 0;
		
		var cantidadProductos = $(".items-meta >:input").length;
	
		for (var i=0; i<cantidadProductos;i++)
		{
			cache.totalPrice = cache.totalPrice + parseInt($($(".productItemPrice").get(i)).html());
		 
		}
		$(".floatr").html(cache.totalPrice);
		
	};

	var ordenarProducto = function(e)
	{
		   
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
		
	};

	var createSummaryHtml = function(getCurrentNombreProducto,getCurrentPrecioProducto,getCurrentIdProducto,counter)
	{ 
		index=counter-1;
		
		$('<div class="delete" id="delete'+counter+'"'+'><img src="/sodaSoftware/img/remove.png" alt="Delete"></div>').appendTo(".product");
		$('<div class="items-meta" id="items-meta'+counter+'"'+'><span class="productItemName" id="productItemName">'+getCurrentNombreProducto+'</span>'
		+'<input type="hidden" name="productos'+"["+index+'].idProducto'+'"'+'value="'+getCurrentIdProducto+
		'"'+'/>'+'<span class="productItemPrice" id="productItemPrice">'+getCurrentPrecioProducto+'</span></div>').appendTo(".product");
		
		
		totalPrice = parseInt(cache.totalPriceHtml.html()) + parseInt(getCurrentPrecioProducto);
		$(".floatr").html(totalPrice);
		
		
		$("#totalOrden").val(totalPrice);
		
	};

	var finalizarOrden= function()
	{
		alert("la Orden se realizó correctamente"); 
	};
	
	this.attachEventOrdenar = function() 
	{
        cache.btnOrdenar.on("click",".product-button",ordenarProducto);
    };
    this.attachEventBorrar = function() 
    {
       cache.productDiv.on("click",".delete",borrarProducto);
    };
    
    this.attachEventFinalizar = function() 
    {
        cache.btnFinalizar.on("click",finalizarOrden);
    };
};

	
Producto.UI = function ()
{
	
	var cache = 
	{
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
	
	this.attachLinkCategoriaEvent = function() 
	{
	   cache.linkCategoria.on("click",menuLinks);		
	};
};