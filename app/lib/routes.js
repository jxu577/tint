Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('/artists', {
  name: 'artists',
});

Router.route('/artworks', {
  name: 'artworks',
});

Router.route('/settings', {
  name: 'settings',
});

Router.route('/signin', {
  name: 'signin',
});


Router.route('/signup', {
  name: 'signup',
});


Router.route('/portfolio', {
  name: 'portfolio',
});


Router.route('/orders', {
  name: 'orders',
});

