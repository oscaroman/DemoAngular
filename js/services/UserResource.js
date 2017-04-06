'use strict';

appBlog.factory('UserResource', function($http, WebApiConfig){


	return {
		getAll : function(){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'users');
		},
		getPosts : function(userId){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'users/' + userId + '/posts');
		},
		getUsers : function(userId){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'users/' + userId);
		},
		getEditUsers : function(userId){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'users/' + userId);
		},
		save: function(users){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.post(servicesUrl + 'users', users);
		}
	};

})