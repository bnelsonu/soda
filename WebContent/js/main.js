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
	productosLoader.getCategorias();
	productosLoader.fillMenuCategorias();
	productosLoader.getProductosByCategoria(1);
};