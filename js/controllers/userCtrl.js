angular.module('app')
    .controller('UserCtrl', function($scope, user) {

        // Using the user service to retrieve
        // users from the 'database'
        user.getUsers()
            .then(function(users) {
                // Users are retrieved successfully
                // and send to the view via $scope.
                console.log('thening...');
                $scope.users = users;
                console.log('Users retrieved successfully');
            })
            .catch(function(error) {
                // Catch any error from q.reject()
                console.log('Encountering an error...');
                $scope.hasError = true;
                $scope.error = error;
            })
            .finally(function() {
                // this block runs regardless
                console.log('Finally done!');
                $scope.finalMsg = "Process complete!";
            });
    });
