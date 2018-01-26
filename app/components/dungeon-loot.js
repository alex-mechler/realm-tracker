import Component from '@ember/component';

export default Component.extend({
	actions:{
		save(cyan, blue, red, orange, white){
			
		},
		cancel(){
			Ember.getOwner(this).lookup('router:main').transitionTo('dungeon');
		}
	}
});
