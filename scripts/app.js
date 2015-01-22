/**
 * Created by pravino on 1/22/2015.
 */

angular.module("todoApp",[])
.controller("MainCtrl",function($scope){
        $scope.todos = []

        $scope.add = function(){

            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function(item) {
            $scope.todos.splice($scope.todos.indexOf(item),1);
        }

        $scope.clearCompleted = function(){

           for( var index = $scope.todos.length-1; index >= 0;index--)
           {
               if($scope.todos[index].completed == true)
               {
                   $scope.todos.splice(index,1);
               }
           }
        }
    });
