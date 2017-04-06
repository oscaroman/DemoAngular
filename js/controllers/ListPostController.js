'user strict'

appBlog.controller('ListPostController', function($scope, PostResource, $route, $uibModal){

	var posts = $route.current.locals.posts.data;
	var users = $route.current.locals.users.data;
	$scope.posts = posts;

	_.each(posts, function(postValue, postIndex){
		var user = _.findWhere(users, {"id" : postValue.userId});
		postValue.username = user.username;
	});

	$scope.showEditPosts = function(post){
	var modalInstance = $uibModal.open({
		templateUrl: 'templates/EditPost.tlp.html',
		controller: 'EditPostController',
		scope : $scope,
		resolve: {
			posts : function(PostResource){
				return PostResource.getEditPosts(post.id);
				},
			users : function(UserResource){
				return UserResource.getAll(post.id);
				}
			}
		});
	}
});

appBlog.controller('EditPostController', function($scope, posts, users, UserResource, PostResource, toastr, $location){	
	$scope.posts = posts.data;
	$scope.users = users.data;

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
})