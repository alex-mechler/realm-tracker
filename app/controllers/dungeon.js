import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		loadDungeon(dungeon){
			this.transitionToRoute('dungeon.'+dungeon);
		}
	}
});
