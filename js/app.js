'use strict'
var dependencies = ['ngRoute', 'toastr', 'ui.bootstrap'];
var appBlog = angular.module('appBlog', dependencies)
		.config(function ($routeProvider){

		//User
		$routeProvider.when(
			'/User/Create',
			{
				templateUrl: 'templates/user/CreateUsers.tlp.html',
				controller: 'CreateUserController',
			}
		);

		$routeProvider.when(
			'/User/List',
			{
				templateUrl: 'templates/user/ListUsers.tlp.html',
				controller: 'ListUserController',
				resolve : {
					users : function(UserResource){
						return UserResource.getAll();
					}
				}
			}
		);

		//Post
		$routeProvider.when(
			'/Post/Create',
			{
				templateUrl: 'templates/post/CreatePost.tlp.html',
				controller: 'CreatePostController',
				resolve : {
					users : function(UserResource){
						return UserResource.getAll();
					}
				}
			}
		);

		$routeProvider.when(
			'/Post/List',
			{
				templateUrl: 'templates/post/ListPost.tlp.html',
				controller: 'ListPostController',
				resolve : {
					posts : function(PostResource){
						return PostResource.getAll();
					},
					users : function(UserResource){
						return UserResource.getAll();
					}
				}
			}
		);

		//Comments
		$routeProvider.when(
			'/Comments/Create',
			{
				templateUrl: 'templates/comments/CreateComments.tlp.html',
				controller: 'CreateCommentsController',
				resolve : {
					posts : function(PostResource){
						return PostResource.getAll();
					}
				}
			}
		);

		$routeProvider.when(
			'/Comments/List',
			{
				templateUrl: 'templates/comments/ListComments.tlp.html',
				controller: 'ListCommentsController',
				resolve : {
					comments : function(CommentResource){
						return CommentResource.getAll();
					},
					posts : function(PostResource){
						return PostResource.getAll();
					}
				}
			}
		);

		//Album
		$routeProvider.when(
			'/Albums/Create',
			{
				templateUrl: 'templates/album/CreateAlbums.tlp.html',
				controller: 'CreateAlbumsController',
				resolve : {
					users : function(UserResource){
						return UserResource.getAll();
					}
				}
			}
		);

		$routeProvider.when(
			'/Albums/List',
			{
				templateUrl: 'templates/album/ListAlbums.tlp.html',
				controller: 'ListAlbumsController',
				resolve : {
					albums : function(AlbumResource){
						return AlbumResource.getAll();
					},
					users : function(UserResource){
						return UserResource.getAll();
					}
				}
			}
		);

		//Photos
		$routeProvider.when(
			'/Photos/Create',
			{
				templateUrl: 'templates/photos/CreatePhotos.tlp.html',
				controller: 'CreatePhotosController',
				resolve : {
					albums : function(AlbumResource){
						return AlbumResource.getAll();
					}
				}
			}
		);

		$routeProvider.when(
			'/Photos/List',
			{
				templateUrl: 'templates/photos/ListPhotos.tlp.html',
				controller: 'ListPhotosController',
				resolve : {
					photos : function(PhotosResource){
						return PhotosResource.getAll();
					}
				}
		});

		$routeProvider.otherwise({ redirectTo: '/User/Create'})

	})