import Ember from 'ember';

export default Ember.Component.extend({
	counter: Ember.inject.service(),
	tagName: "tr",

	actions: {
		onFocusOut() {
			console.log(this.get("counter").getCountAndIncrement());
		}
	}
});
