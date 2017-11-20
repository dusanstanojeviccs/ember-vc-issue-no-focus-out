import Ember from 'ember';

export default Ember.Service.extend({
	count: 1,

	getCountAndIncrement() {
		let count = this.get("count");

		this.set("count", count + 1);

		return count;
	}
});
