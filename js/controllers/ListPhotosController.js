'user strict'

appBlog.controller('ListPhotosController', function($scope, PhotosResource, $route,  $uibModal){

	var photos = $route.current.locals.photos.data;

	$scope.photos = photos;

	$scope.showEditPhotos = function(photos){
	var modalInstance = $uibModal.open({
		templateUrl: 'templates/EditPhotos.tlp.html',
		controller: 'EditPhotosController',
		scope : $scope,
		resolve: {
			photos : function(PhotosResource){
				return PhotosResource.getEditPhotos(photos.id);
				},
			albums: function(AlbumResource){
				return 	AlbumResource.getAll(photos.id);
				}
			}
		});
	}
});

appBlog.controller('EditPhotosController', function($scope, photos, albums, PhotosResource, AlbumResource, toastr, $location){
	$scope.photos = photos.data;
	$scope.albums = albums.data;

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
})