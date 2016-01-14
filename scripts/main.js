var React = require('react');
var ReactDOM = require('react-dom');
var bootstrap = require('bootstrap');

var rootDir = './components/';

var App = require(rootDir+'App.js');

ReactDOM.render(
	<App />, document.getElementById('content')
);
