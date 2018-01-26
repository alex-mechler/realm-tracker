import Component from '@ember/component';

let itemsObtained = new Set();

export default Component.extend({
	actions:{
		generateValue(item){
			return item;
		},
		alert(value){
			alert(value);
		},
		toggleItem(item){
			if(itemsObtained.has(item)){
				itemsObtained.delete(item);
			}else{
				itemsObtained.add(item);
			}
		},
		save(){
			itemsObtained.forEach(function(i){
				alert(i);
			});
		}
	}
});
