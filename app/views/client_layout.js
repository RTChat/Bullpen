// ClientLayout

require('styles/client_layout.css');
var RTCWrapper = RTChat.RTCWrapper;

module.exports = Backbone.View.extend({
	id: 'ClientLayout',
	template: `
		{ scope.message }
		<div data-subview="chat"></div>
	`,
	waitingMessage: 'Waiting for next representitive, please send your questions and they will be answered as soon as possible.',
	subviewCreators: {
		chat: function() { return new RTChat.Views.ChatPanel(); },
	},
	initialize: function() {
		Backbone.Subviews.add( this );
	},
	render: function() {
		// Open private connection.
		RTCWrapper.joinRoom(window.location.hash);

		RTCWrapper.onPeerJoin(function(ss) {
			console.log("PEER CONNECTED", ss)
		});

		// Request representive to join private session.
		RTCWrapper.requestPrivateSession(
			window.location.hash.split("?")[0],
			window.location.hash
		);

		this.scope.message = this.waitingMessage;

		this.$el.html(this.template);
		Rivets.bind(this.$el, {scope: this.scope});
		return this;
	},
	scope: {}
});