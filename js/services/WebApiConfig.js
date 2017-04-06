'use strict';

appBlog.factory('WebApiConfig', function(){

	var host = "http://jsonplaceholder.typicode.com/";
	var path = "";
	var servicesUrl = host + path;

	return {
		getServiceUrl : function(){
			return servicesUrl;
		}
	}
})
