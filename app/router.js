import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('dungeon', function() {
    this.route('shatters');
    this.route('lost_halls');
  });
});

export default Router;
