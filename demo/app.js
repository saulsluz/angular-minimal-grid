(function () {

  var app = angular.module('app', [
    'ngMinimalGrid'
  ])

  app.config(function(minimalGridConfigProvider){
    minimalGridConfigProvider.setStatsMessage('Mostrando %1 à %2 de %3 resultados')
    minimalGridConfigProvider.setFirstLabel('Primeiro')
    minimalGridConfigProvider.setLastLabel('Último')
  })

  app.controller('home', ['$scope','$timeout', function ($scope, $timeout) {


    // minimal
    $scope.minimalColumns = [
      { key: 'name', title: 'Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'age', title: 'Age' }
    ]
    $scope.minimalRows = get100Rows()


    // custom
    $scope.customColumns = [
      { key: 'name', title: 'Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'age', title: 'Age' }
    ]
    $scope.customRows = get100Rows()


    // callback
    $scope.callbackColumns = [
      { key: 'name', title: 'Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'age', title: 'Age' }
    ]
    $scope.callbackRows = get100Rows()
    $scope.callbackChange = function(orderBy){
      console.log('callbackChange', orderBy)
    }
    $scope.callbackPaginate = function(pages){
      console.log('callbackPaginate', pages)
    }
    $scope.callbackClick = function(row){
      console.log('callbackClick', row)
    }


    // fake
    $scope.fakeColumns = [
      { key: 'name', title: 'Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'age', title: 'Age' }
    ]
    $scope.fakeRows = []
    asyncGet100Rows(function(rows){
      $scope.fakeRows = rows
      $scope.fakeTotal = $scope.fakeRows.length
    })

    // fake with callback
    $scope.fCallColumns = [
      { key: 'name', title: 'Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'age', title: 'Age' }
    ]
    $scope.fCallRows = get100Rows()
    $scope.fCallTotal = $scope.fCallRows.length
    $scope.fCallChange = function(orderBy){
      console.log('fCallChange', orderBy)
    }
    $scope.fCallPaginate = function(pages){
      console.log('fCallPaginate', pages)
    }
    $scope.fCallClick = function(row){
      console.log('fCallClick', row)
    }


    function get100Rows(){
      var rows = []
      for (var x=0; x<100; x++){
        rows.push(
          { name: 'John '+x, lastName: 'Doe', age: x }
        )
      }
      return rows
    }

    function asyncGet100Rows(callback){
      $timeout(function(){
        var rows = get100Rows()
        callback(rows)
      },3000)
    }

  }])

})();