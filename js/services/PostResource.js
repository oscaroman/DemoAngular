'use strict';

appBlog.factory('PostResource', function($http, WebApiConfig){
	
	return {
		getAll : function(){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'posts');
		},
		getEditPosts : function(postsId){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'posts/' + postsId);
		},
		save: function(posts){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.post(servicesUrl + 'posts', posts);
		}
	};
})