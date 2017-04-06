'use strict';

appBlog.factory('CommentResource', function($http, WebApiConfig){	

	return {
		getAll : function(){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.get(servicesUrl + 'comments');
		},
		getEditComments : function(commentsId){
		var servicesUrl = WebApiConfig.getServiceUrl();
		return $http.get(servicesUrl + 'comments/' + commentsId);
		},
		save: function(comments){
			var servicesUrl = WebApiConfig.getServiceUrl();
			return $http.post(servicesUrl + 'comments', comments);
		}
	};
})