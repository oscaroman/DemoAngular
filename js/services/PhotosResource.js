'use strict';

appBlog.factory('PhotosResource', function($http, WebApiConfig){


	return {
		getAll : function(){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'photos');
		},
		getEditPhotos : function(photosId){
		var servicesUrl = WebApiConfig.getServiceUrl();
		return $http.get(servicesUrl + 'photos/' + photosId);
		},
		save: function(photos){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.post(servicesUrl + 'photos', photos);
		}

	};

})