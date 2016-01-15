var React = require('react');
var PropTypes = React.PropTypes;

var Dropdown = require('./Dropdown');

var App = React.createClass({
	render: function() {
		var items = ['Testing 1', 'Testing 2', 'Testing 3'];

		return (
			<Dropdown items={items} title="Click Me!!!!" />
		);
	}

});

module.exports = App;
