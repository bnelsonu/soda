/**
 * 
 */
$(function() {
	initializeProductos();
	
});

function initializeProductos ()
{
	var productosLoader = new Producto.Loader();
	productosLoader.listen();
};