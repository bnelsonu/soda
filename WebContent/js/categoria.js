/**
 * Objeto Categoria
 */
 
 
 //Global object
var Categoria = Categoria || {};


Categoria.Obj = function(idCategoriaPar,nombreCategoriaPar){

	var idCategoria = idCategoriaPar;
	var nombreCategoria = nombreCategoriaPar;
	
	this.getIdCategoria = function(){
		return idCategoria;
	};
	
	this.getNombreCategoria = function(){
		return nombreCategoria;
	};
	
};