'user strict'

appBlog.controller('ListUserController', function($scope, UserResource, $route, $uibModal){
	var users = $route.current.locals.users.data;
	$scope.users = users;

	$scope.showPosts = function(user){
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/UserPost.tlp.html',
			controller: 'UserPostController',
			scope : $scope,
			resolve: {
				"user" : function(){
					return user;
				},
				posts : function(UserResource){
					return UserResource.getPosts(user.id);
				}
			}
		});
	}

	$scope.showUser = function(user){
	var modalInstance = $uibModal.open({
		templateUrl: 'templates/ViewUser.tlp.html',
		controller: 'ViewAllUserController',
		scope : $scope,
		resolve: {
			"user" : function(UserResource){
				return UserResource.getUsers(user.id);
				}
			}
		});
	}

	$scope.showEditUser = function(user){
	var modalInstance = $uibModal.open({
		templateUrl: 'templates/EditUser.tlp.html',
		controller: 'EditUserController',
		scope : $scope,
		resolve: {
			"user" : function(UserResource){
				return UserResource.getEditUsers(user.id);
				}
			}
		});
	}
});

appBlog.controller('UserPostController', function($scope, user, posts){
	$scope.user = user.data;
	$scope.posts = posts.data;
})

appBlog.controller('ViewAllUserController', function($scope, user){
	$scope.user = user.data;
})

appBlog.controller('EditUserController', function($scope, user, UserResource, toastr, $location){
	$scope.user = user.data;
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
})
