/**
 * 
 */
$(function() {
	initializeProductos();
	
});

function initializeProductos ()
{
	var	index = $('itemBox').length;
	alert(index);
	if(index === 0)
	{
		var productosLoader = new Producto.Loader();
		productosLoader.getCategorias();
		productosLoader.fillMenuCategorias();
		productosLoader.getProductosByCategoria(1);
		productosLoader.fillProductosByCategoria();
	    var productosUI = new Producto.UI(); 	
		productosUI.attachEvents();
	}	

};