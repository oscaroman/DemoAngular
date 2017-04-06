'user strict'

appBlog.controller('CreatePhotosController', function($scope, $route, toastr, PhotosResource, $location){
	var albums = $route.current.locals.albums.data;
	$scope.albums = albums;

	$scope.photo = {};

	$scope.savePhoto = function(){
		PhotosResource.save($scope.photo)
			.then(function(response){
				toastr.success('User and Post', 'The Changes have been save!',{positionClass: 'toast-top-right'});
				$location.path('/Photos/List');
			})
			.catch(function(response){
				toastr.error('User and Post', 'An error ha ocurred',{positionClass: 'toast-top-right'});
			});
	}
});