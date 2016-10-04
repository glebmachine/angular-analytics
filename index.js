import angular from 'angular';

const component = angular.module('angular-analytics', []);

component.service('$analytics', function ($rootScope, $location, $window) {
  'ngInject';

  this.event = (data) => {
    // console.log('event', data);
    $window.ga.apply(null, ['send', 'event'].concat(data));
  };

  this.page = (page) => {
    // console.log('pageview', page);
    $window.ga('send', 'pageview', page);
  };

  this.init = () => {
    // console.log('inited');
  };

  $rootScope.$on('$stateChangeSuccess', () => {
    this.page($location.path());
  });
});

component.directive('gaEvent', ($window, $analytics) => {
  'ngInject';

  return {
    restrict: 'A',
    link(scope, element, attr) {
      // console.log(attr);
      if (!$window.ga) {
        throw new Error('google analytics не подключен');
      }

      element.on('click', () => {
        $analytics.event(attr.gaEvent.split(','));
      });
    },
  };
});

module.exports = 'angular-analytics';
