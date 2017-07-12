app.directive('task', function(){
            return {
                template:'<table class="table table-striped table-bordered"><tbody><tr><th>Task name</th><th>Tags</th>'+
                        '<th>Actual effort</th><th>Estimated effort</th>'+
                        '<th>Due date</th></tr>'+
                
                        //use ng-switch, ng-if, ng-repeat
                        '<tr ng-switch = "task.is_high_priority" ng-repeat = "task in tasks" ng-if = "task.obj_status == \'active\'">'+
                
                        '<td ng-switch-when = "true" class = "bold" ng-click = "next(task)">{{task.name}}</td>'+
                        '<td ng-switch-when = "undefined" ng-click = "next(task)">{{task.name}}</td>'+
                
                        '<td><span ng-repeat="tag in task.tags">{{tag}}, </span></td>'+
                        '<td>{{task.actual_effort}}</td>'+
                        '<td>{{task.estimated_effort}}</td>'+
                        '<td>{{task.due_date | date:"yyyy-MM-dd"}}</td>'+ //фильтр date
                        '</tr></tbody></table>'
            };
        });