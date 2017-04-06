'user strict'

appBlog.controller('CreateCommentsController', function($scope, $route, toastr, CommentResource, $location){
	var posts = $route.current.locals.posts.data;
	$scope.posts = posts;

	$scope.comment = {};

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
});