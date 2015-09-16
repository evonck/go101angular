angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('http://192.168.99.100:8081/todos');
			},
			create : function(todoData) {
				return $http.post('http://192.168.99.100:8081/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('http://192.168.99.100:8081/todos' + id);
			}
		}
	}]);

