'user strict'

appBlog.controller('CreatePostController', function($scope, $route, toastr, PostResource, $location){
	var users = $route.current.locals.users.data;
	$scope.users = users;
	//console.log($scope.users);

	$scope.post = {};

	$scope.savePost = function(){
		PostResource.save($scope.post)
			.then(function(response){
				toastr.success('User and Post', 'The Changes have been save!',{positionClass: 'toast-top-right'}
				);
				$location.path('/Post/List');
			})
			.catch(function(response){
				toastr.error('User and Post', 'An error ha ocurred',{positionClass: 'toast-top-right'});
			});
	}
});