var React = require('react');
var PropTypes = React.PropTypes;

var Button = require('./Button');

var App = React.createClass({

	render: function() {
		return (
			<Button type="btn btn-default" title="Button" />
		);
	}

});

module.exports = App;
