// RoomPanel

// require('styles/room_panel.css');
// var RTCWrapper = RTChat.RTCWrapper;

module.exports = RTChat.Views.RoomPanel.extend({
	template: `
		<div class="sub-panel">
			<br>
			<div class="room-subject">
				<button class="btn btn-default">EDIT</button>
				<span> { scope.roomSubject } </span>
			</div>
			<div>
				<button class="btn btn-default"> Ready! </button>
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
});

