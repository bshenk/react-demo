var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

// Attach React module to DOM
ReactDOM.render(
	<App apiKey="ea57bddf27154bc88b80e2816b3f6525" rootUrl="http://www.bungie.net/Platform/Destiny" />,
	document.getElementById('content')
);
