angular.module('app')
    .factory('user', function($q) {

        // database
        var users = [
            {'name': 'Yang', 'age': 28 },
            {'name': 'Kris', 'age': 27 },
            {'name': 'Eyon', 'age': 26 },
            {'name': 'Tariq', 'age': 25 }
        ];

        // returns the list of users from 'database'
        function getUsers() {
            console.log('Getting users...');

            // create a defer object to handle async
            // and return a promise object to be used
            // by the controller.
            var q = $q.defer();

            // simulate the time taken for a server to
            // return data at a later time.
            setTimeout(function() {
                if (users) {
                    // no error has occured
                    // this value is passed to the promise
                    q.resolve(users);
                } else {
                    // handle an error
                    q.reject('Error retrieving users.');
                }
            }, 3000);

            // return a promise object
            return q.promise;
        }

        // expose the service functions
        return {
            getUsers: getUsers
        };
    });
