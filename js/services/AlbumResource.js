'use strict';

appBlog.factory('AlbumResource', function($http, WebApiConfig){

	return {
		getAll : function(){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'albums');
		},
		getEditAlbums : function(albumsId){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'albums/' + albumsId);
		},
		save: function(albums){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.post(servicesUrl + 'albums', albums);
		}
	};
})