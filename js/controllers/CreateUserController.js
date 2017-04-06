'user strict'

appBlog.controller('CreateUserController', function($scope, $route, toastr, UserResource, $uibModal, $location){
	var users = $route.current.locals.users;
	$scope.users = users;

	$scope.user= {};

	$scope.saveUser = function(){
		UserResource.save($scope.user)
			.then(function(response){
				toastr.success('User and Post', 'The Changes have been save!',{positionClass: 'toast-top-right'}
				);
				$location.path('/User/List');
			})
			.catch(function(response){
				toastr.error('User and Post', 'An error ha ocurred',{positionClass: 'toast-top-right'});
			});
	}
	
});

