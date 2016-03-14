// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'jett.ionic.filter.bar']) 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
var app = angular.module('myApp', ['ionic']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      controller: 'TabsCtrl',
      templateUrl: 'tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'home.html',
          controller: 'HomeTabCtrl'
        }
      }
    })  
    .state('tabs.settings', {
      url: '/settings',
      views: {
        'settings-tab': {
          templateUrl: 'settings.html'
        }
      }
    })    
    .state('about', {
      url: '/about',
      controller: 'AboutCtrl',
      templateUrl: 'about.html'
    });
 
  $urlRouterProvider.otherwise('/tab');
});
 
app.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
   
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
   
});
 
app.controller('HomeTabCtrl', function($scope, $ionicSideMenuDelegate) {
 
});
 
app.controller('AboutCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
});

angular.module('starter')  
           .controller('ItemController', ['$ionicFilterBar', ItemController])

function ItemController($ionicFilterBar) {  
    var vm = this,
        items = [],
        filterBarInstance;

    for (var i = 1; i <= 1000; i++) {
        var itemDate = moment().add(i, 'days');

        var item = {
            description: 'Description for item ' + i,
            date: itemDate.toDate()
        };
        items.push(item);
    }

    vm.items = items;

    vm.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: vm.items,
        update: function (filteredItems) {
          vm.items = filteredItems;
        },
        filterProperties: 'description'
      });
    };

    return vm;
}