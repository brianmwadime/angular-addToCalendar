angular.module("ft.addtocalendar", [])
    .directive("addToCalendar", function () {
        "use strict";
        return {
            restrict: "A",
            scope: {
                end: "=",
                start: "=",
                description: "=",
                address: "=",
                title: "="
            },
            link: function (scope, elem, attrs) {
                console.log(attrs);
                var calendar = createCalendar({
                    options: {
                        // class: "my-class"
                    },
                    data: {
                        title: scope.title,     // Event title
                        start: new Date(scope.start),   // Event start date
                        // duration: 50,                            // Event duration (IN MINUTES)
                        end: new Date(scope.end),     // You can also choose to set an end time.
                        // If an end time is set, this will take precedence over duration
                        address: scope.address,
                        description: scope.description
                    }
                });

                elem.append(calendar);
            }
        };
    });
