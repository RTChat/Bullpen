// RoomPanel

// require('styles/room_panel.css');
var RTCWrapper = RTChat.RTCWrapper;

var superInit = RTChat.Views.RoomPanel.prototype.initialize;

module.exports = RTChat.Views.RoomPanel.extend({
	template: `
		<div class="sub-panel">
			<br>
			<div class="room-subject">
				<button class="btn btn-default">EDIT</button>
				<span rv-if="scope.roomSubject"> { scope.roomSubject } </span>
				<span rv-unless="scope.roomSubject"> Welcome to { scope.roomName } </span>
			</div>
			<div>
				<button class="btn btn-default" rv-on-click="scope.toggleReady">
					<span rv-unless="scope.ready">Ready!</span>
					<span rv-if="scope.ready">Cancel Waiting</span>
				</button>
			</div>
			<br><br>Users:
			<ul class="users-panel">
				<li rv-each-user="scope.users" rv-show="user.extra.name">
					{ user.extra.name }
				</li>
			</ul>
		</div>
		<div class="sub-panel">
			<div data-subview="chat"></div>
		</div>
	`,
	initialize: function() {
		var self = this;
		this.scope.ready = false;
		this.scope.toggleReady = function() {
			self.scope.ready = !self.scope.ready;
			console.log("READY!", self.scope.ready);
			if (self.scope.ready) {
				RTCWrapper.connection.peers.forEach(function(peer) {
					console.log("peerX", peer.extra);
					if (peer.extra.requestPrivateSession) {
						// Open new window with chat user.
						window.open(
							window.location.pathname + peer.extra.requestPrivateSession,
							"dummyname",
							"height=400,width=500"
						)
						self.scope.ready = false;
					}
				});
			} else {
				//TODO: poll???
			}
		}
		superInit.call(this);
	},
	// scope: {
	// 	ready: function() {console.log("RR")}
	// },
	// render: function() {
	// 	superRender();
	// },
});

