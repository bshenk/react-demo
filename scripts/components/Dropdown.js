var React = require('react');
var PropTypes = React.PropTypes;

var Dropdown = React.createClass({
	getInitialState: function() {
		return {
			show: false
		};
	},
	handleClick: function() {
		this.setState({show: !this.state.show});
	},
	render: function() {
		var list = this.props.items.map(function(item, i) {
			return (
				<li key={i}><a>{item}</a></li>
			);
		});

		return (
			<div className="dropdown">
				<button onClick={this.handleClick} className="btn btn-default">{this.props.title} <span className="caret"></span></button>
				<ul className={"dropdown-menu" + (this.state.show ? " show" : "")}>
					{list}
				</ul>
			</div>
		);
	}

});

module.exports = Dropdown;
