/*global Thorax, Backbone*/
/*jshint unused:false*/
var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

$(function () {
	// Kick things off by creating the **App**.
	var view = new Thorax.Views.app({
		collection: window.app.Todos
	});
	view.appendTo('body');
});
