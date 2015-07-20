// SmugMug services
(function(hello) {

	hello.init({

		smugmug: {
			name: 'SmugMug',

			oauth: {
				version: '1.0a',
				auth: 'http://api.smugmug.com/services/oauth/1.0a/authorize',
				request: 'http://api.smugmug.com/services/oauth/1.0a/getRequestToken',
				token: 'http://api.smugmug.com/services/oauth/1.0a/getAccessToken'
			},
			refresh: true,

			scope: {
				basic: ''
			},

			scope_delim: ' ',

			login: function(p) {
				p.options.window_width = 710;
			},

			base: 'https://api.smugmug.com/api/v2',

			get: {
				me: 'user/profile'
			},
			wrap: {
				me: function(o, headers) {}
			},
			xhr: true
		}
	});

})(hello);
