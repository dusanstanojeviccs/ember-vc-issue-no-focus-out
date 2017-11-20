import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let data = [];

		for (let i = 0; i < 1000; i++) {
			data.addObject(Ember.Object.create({id: i, name: "Name " + i}));
		}

		return data;
	}
});
