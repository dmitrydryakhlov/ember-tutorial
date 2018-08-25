import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('about');
  this.route('contact');
  //this.route('index', { path: '/'});
  //you can modify the index route's path by specifying
  //this.route('index', { path: '/custom-path'}).
  this.route('rentals', function () {
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router;
