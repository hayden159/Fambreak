
function CreatorsController ($scope, initializer) {
    $scope.member = initializer;
}

CreatorsController.$inject = ['$scope', 'creatorAppInitializer'];
