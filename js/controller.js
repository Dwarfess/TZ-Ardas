app.controller('myCtrl', function($http, $scope, $location, nameStorage){
            $http.get('tasks.json')//получаем JSON файл с помощью сервиса $http
            .success(function(result){
                console.log('success', result);
                $scope.tasks = result;
            })
            .error(function(result){
                console.log('error');
            })
            
            $scope.next = function(n){//переход по клику на задачу
                nameStorage.setSelected(n);//передаем выбранный объект
                $location.path('/second');               
            }
            
            $scope.selected = nameStorage.getSelected();//получаем выбранный объект
            
            $scope.previous = function(){//переход по клику на первую страницу
                $location.path('/first');          
            }
            
            $scope.x = true;//по умолчанию строка без возможности редактирования
            
            $scope.ok = function(){//отправляем задачу на сервер 
                $scope.x = true;
                $http.put('http://agizens.clan.su', $scope.selected, function (response) {
                    $scope.msg = "Service not Exists";
                    $scope.statusval = response.status;
                    $scope.statustext = response.statusText;
                    $scope.headers = response.headers();
                    });
                }
        })
        
        .service('nameStorage', function () {//сервис для получения/передачи объекта
           var selected = null;
           return {
               setSelected: function (n) {
                 selected = n;
               },
              getSelected: function () {
                 return selected;
              }
            }
        });