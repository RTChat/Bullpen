// ClientLayout

module.exports = Backbone.View.extend({
	template: `cool`,
	render: function() {
		this.$el.html(this.template);
		return this;
	}
});