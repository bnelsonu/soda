/**
 * 
 */

//Global object
var Producto = Producto || {};


Producto.Loader = function(){
	
	var totalPrice = 0;
	elementsCounter = 0;
	categoriesLink = "/sodaSoftware/main/categorias";
	var categorias = [];
	
	var cache = {
		btnOrdenar:$(".product-button"),
		btnDelete:$(".delete"),
		nombreProducto:$(".nombreProducto").html(),
		linkCategory:$(".categoryLink")
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
		
		$.each(categorias, function(i,categoria)
		{
			$(".menu_items").find(".categoryLi").find("categoryLink").html(categoria.nombreCategoria);
		});
		
	};
	
	
	this.listen = function(){
		
		cache.btnOrdenar.click(function(e)
		{
			elementsCounter++;
			e.preventDefault();
			
			botonClickedIndex = $(".product-button").index(this);
			
			getCurrentNombreProducto = $(".nombreProducto").get(botonClickedIndex);
			getCurrentPrecioProducto = $(".productPrice").get(botonClickedIndex);
			
			var currentProductoHtml = $(getCurrentNombreProducto).html();
			var currentPrecioHtml = $(getCurrentPrecioProducto).html();
			
			createSummaryHtml(currentProductoHtml,currentPrecioHtml,elementsCounter);
								
		});
		
		cache.btnDelete.click(function(e)
		{
			e.preventDefault();
			botonClickedIndex = cache.btnDelete.index(this);
			 $(items-meta).get(botonClickedIndex).remove();
		});
		
		cache.linkCategory.click(function(e)
		{					
			$.ajax({
				url: autoloopUrl + dealerCode,
				type: 'GET',
				async: false,
				dataType: 'json'
			}).done(function(data, textStatus, jqXHR){
				if(jqXHR.status === 200){
					if(!$.isEmptyObject(data)){
						
					}
				}    
			});
	  });
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
};