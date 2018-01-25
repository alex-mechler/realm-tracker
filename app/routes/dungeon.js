import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return[{
			name: 'The Shatters',
			img: '/assests/images/portal/The Shatters.png',
			url: 'shatters'
		},{
			name: 'The Nest',
			img: '/assests/images/portal/The Nest.png',
			url: 'nest'
		},{
			name: 'Lost Halls',
			img: '/assests/images/portal/Lost Halls.png',
			url: 'lost_halls'
		}]
	},
});
