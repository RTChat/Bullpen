// Bullpen - built using the RTChat framework.

// Extend Views
_.extend(RTChat.Views,
	// Load all views such that "views/sample_view.js" becomes "SampleView".
	RTChat.load_module(require.context('app/views', true, /\.js$/))
);

// Extend AppConfig
_.extend(RTChat.AppConfig, require('app/config.json'));
