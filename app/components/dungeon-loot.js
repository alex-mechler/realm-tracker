import Component from '@ember/component';

export default Component.extend({
	actions:{
		save(cyan, blue, red, orange, white){
			cyan.forEach(function(i){
				alert(i);
			});
		}
	}
});
