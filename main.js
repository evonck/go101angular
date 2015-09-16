angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todo', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		
		$scope.createTodo = function() {

			if ($scope.formData.name != undefined) {
				$scope.loading = true;

				Todos.create($scope.formData)

					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; 
						$scope.todos = data; 
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}]);