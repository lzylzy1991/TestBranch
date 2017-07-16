angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

   //andoird --The bottom in the upper solution
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  // $ionicConfigProvider.platform.ios.views.transition('ios');
  // $ionicConfigProvider.platform.android.views.transition('android');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $stateProvider
   // setup an abstract state for the tabs directive

        .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html",
          controller: "TabCtrl"
        })
        .state('tabs.home', {
          url: "/home",
          views: {
            'tab-home': {
              templateUrl: "templates/home.html",
              controller: 'HomeTabCtrl'
            }
          }
        })
        .state('tabs.about', {
          url: "/about",
          views: {
            'tab-about': {
              templateUrl: "templates/place.html",
              // controller: 'About'
            }
          }
        })
        .state('tabs.user', {
          url: "/user",
          views: {
            'tab-user': {
            templateUrl: "templates/user.html",
            // controller: 'UserCtrl'
            }
          }
        })
        //验酒
        // .state('auth-wine', {
        //   url: "/auth-wine",
        //   templateUrl: "templates/authwine/auth-wine.html",
        //   controller: 'AuthWine'
        // })

       $urlRouterProvider.otherwise("/tab/home");

});


