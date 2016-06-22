// Layout - The parent view of the whole app, and also the router.

// require('styles/layout.css');

// Add "client" subview.
_.extend(RTChat.Views.Layout.prototype.subviewCreators, {
	client: function() { return new RTChat.Views.ClientLayout(); },
});

// Extend Layout
module.exports = RTChat.Views.Layout.extend({
	clientLayout: '<div data-subview="client"></div>',
	render: function(){
		document.title = RTChat.AppConfig.AppName+' '+document.location.hash;

		// "Router"
		if (document.location.hash.length === 0) {
			this.$el.html(this.template);
			this.$('.main-panel').html(this.welcomeTemplate);
		} else if(document.location.hash.match(/\?/)) {
			this.$el.html(this.clientLayout);
		} else {
			this.$el.html(this.template);
			this.$('.main-panel').html(this.roomTemplate);
		}

		return this;
	}
});
