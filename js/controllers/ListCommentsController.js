'user strict'

appBlog.controller('ListCommentsController', function($scope, CommentResource, $route, $uibModal){

	var comments = $route.current.locals.comments.data;
	var posts = $route.current.locals.posts.data;

	_.each(comments, function(commentValue, commentIndex){
		var post = _.findWhere(posts, {"id" : commentValue.postId});
		commentValue.title = post.title;
	});
	console.log(comments);
	$scope.comments = comments;

	$scope.showEditComments = function(comments){
	var modalInstance = $uibModal.open({
		templateUrl: 'templates/EditComments.tlp.html',
		controller: 'EditCommentsController',
		scope : $scope,
		resolve: {
			comments : function(CommentResource){
				return CommentResource.getEditComments(comments.id);
				},
			posts : function(PostResource){
				return PostResource.getAll(comments.id);
				}
			}
		});
	}
});

appBlog.controller('EditCommentsController', function($scope, comments, posts, CommentResource, PostResource, toastr, $location){
	$scope.comments = comments.data;
	$scope.posts = posts.data;

	$scope.saveComment = function(){
		CommentResource.save($scope.comment)
			.then(function(response){
			toastr.success('User and Post', 'The Changes have been save!',{positionClass: 'toast-top-right'});
			$location.path('/Comments/List');
			})
			.catch(function(response){
			toastr.error('User and Post', 'An error ha ocurred',{positionClass: 'toast-top-right'});
			});
	}
})