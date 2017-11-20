import Ember from 'ember';

export default Ember.Controller.extend({
	counter: 1,

	actions: {
		onFocusOut() {
			console.log("onFocusOut " + this.get("counter"));

			this.set("counter", this.get("counter") + 1);
		}
	}
});
