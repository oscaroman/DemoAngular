'user strict'

appBlog.controller('ListAlbumsController', function($scope, AlbumResource, $route, $uibModal){

	var albums = $route.current.locals.albums.data;
	var users = $route.current.locals.users.data;
	$scope.albums = albums;

	_.each(albums, function(albumValue, albumIndex){
	var user = _.findWhere(users, {"id" : albumValue.userId});
	albumValue.username = user.username;
	});

	$scope.showEditAlbums = function(albums){
	var modalInstance = $uibModal.open({
		templateUrl: 'templates/EditAlbum.tlp.html',
		controller: 'EditAlbumsController',
		scope : $scope,
		resolve: {
			albums : function(AlbumResource){
				return AlbumResource.getEditAlbums(albums.id);
				}, 
			users : function(UserResource){
				return UserResource.getAll(albums.id);
				}
			}
		});
	}
});

appBlog.controller('EditAlbumsController', function($scope, albums, users, AlbumResource, UserResource, toastr, $location){
	$scope.albums = albums.data;
	$scope.users = users.data;

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
})