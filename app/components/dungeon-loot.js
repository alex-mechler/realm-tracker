import Component from '@ember/component';
import { getOwner } from '@ember/application';

export default Component.extend({
	actions:{
		save(){
			let storage = window.localStorage;
			for (let i = 0, j = arguments.length; i < j; i++){
				if(typeof(arguments[i]) !== 'undefined' && arguments[i] != null){
					arguments[i].forEach(function(i){
						if(storage.getItem(i) === null){
							storage.setItem(i, 1);
						}else{
							let val = parseInt(storage.getItem(i)) + 1;
							storage.setItem(i, val);
						}
					});
				}
			}
			getOwner(this).lookup('router:main').transitionTo('dungeon');
		},
		cancel(){
			getOwner(this).lookup('router:main').transitionTo('dungeon');
		}
	}
});
