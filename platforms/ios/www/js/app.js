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
    .state('tabs.fav', {
      url: '/fav',
      views: {
        'fav-tab': {
          templateUrl:'fav.html'
        }
      }
    })
    .state('tabs.addstation', {
      url: '/addstation',
      views: {
        'addstation-tab': {
          templateUrl: 'addstation.html'
          
        }
      }
    }) 
    .state('tabs.saptarangi', {
      url: '/saptarangi',
      views: {
        'home-tab': {
          templateUrl: 'saptarangi.html',
          controller: 'HomeTabCtrl'
        }
      }
    })

    .state('tabs.ithari', {
      url: '/ithari',
      views: {
        'home-tab': {
          templateUrl: 'ithari.html',
          controller: 'HomeTabCtrl'
        }
      }
    })

    .state('tabs.kiss', {
      url: '/kiss',
      views: {
        'home-tab': {
          templateUrl: 'kiss.html',
          controller: 'HomeTabCtrl'
        }
      }
    }) 

    .state('tabs.image', {
      url: '/image',
      views: {
        'home-tab': {
          templateUrl: 'image.html',
          controller: 'HomeTabCtrl'
        }
      }
    })

    .state('tabs.classic', {
      url: '/classic',
      views: {
        'home-tab': {
          templateUrl: 'classic.html',
          controller: 'HomeTabCtrl'
        }
      }
    })

    .state('tabs.nepal', {
      url: '/nepal',
      views: {
        'home-tab': {
          templateUrl: 'nepal.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.kalika', {
      url: '/kalika',
      views: {
        'home-tab': {
          templateUrl: 'kalika.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.himal', {
      url: '/himal',
      views: {
        'home-tab': {
          templateUrl: 'himal.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.butwal', {
      url: '/butwal',
      views: {
        'home-tab': {
          templateUrl: 'butwal.html',
          controller: 'HomeTabCtrl'
        }
      }
    })

     .state('tabs.help', {
      url: '/help',
      views: {
        'help-tab': {
          templateUrl:'help.html'
        }
      }
    });
 
  $urlRouterProvider.otherwise('/tab');
});
 
app.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
   
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
    $scope.isPlayMode = function(){
  return $scope.playMode
}
  }
   
});
 
app.controller('HomeTabCtrl', function($scope, $ionicSideMenuDelegate) {
 
});
app.controller('AboutCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
});
app.controller('LoginCtrl', function($scope) {
    $scope.data = {};
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
    }
})
 

angular.module('starter', ['ionic', 'jett.ionic.filter.bar'])   
           .controller('ItemController', ['$ionicFilterBar', ItemController])


function ItemController($ionicFilterBar) {  
    var vm = this,
        items =  [
                { id: 1, title: 'Kantipur'},
                { id: 2, title: 'Butwal'},
                { id: 3, title: 'Ithari'},
                { id: 4, title: 'Nepal'},
                { id: 5, title: 'Kalika'},
                { id: 6, title: 'Kiss'},
                { id: 7, title: 'classic'},
                { id: 8, title: 'himal'}
                
            ],
        filterBarInstance;

    for (var i = 1; i <= 1000; i++) {
        var id = moment().add(i, 'title');

        var item = {
            description: 'title for item ' + i,
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
        filterProperties: 'title'
      });
    };

    return vm;
}
