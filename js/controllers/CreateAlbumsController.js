'user strict'

appBlog.controller('CreateAlbumsController', function($scope, $route, toastr, AlbumResource, $location){
	var users = $route.current.locals.users.data;
	$scope.users = users;

	$scope.album = {};

	$scope.saveAlbum = function(){
		AlbumResource.save($scope.album)
			.then(function(response){
				toastr.success('User and Post', 'The Changes have been save!',{positionClass: 'toast-top-right'});
				$location.path('/Albums/List');
			})
			.catch(function(response){
				toastr.error('User and Post', 'An error ha ocurred',{positionClass: 'toast-top-right'});
			});
	}
});