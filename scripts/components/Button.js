var React = require('react');
var PropTypes = React.PropTypes;

var Button = React.createClass({

	render: function() {
		return (
			<button className={this.props.type}>{this.props.title}</button>
		);
	}

});

module.exports = Button;
