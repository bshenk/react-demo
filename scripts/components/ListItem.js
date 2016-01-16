var React = require('react');
var PropTypes = React.PropTypes;

//Firebase db
var Firebase = require('firebase');
var rootUrl = 'https://torrid-torch-4017.firebaseio.com/';

var ListItem = React.createClass({
	getInitialState: function() {
		return {
			todo: this.props.item.todo,
			done: this.props.item.done
		}
	},
	componentWillMount: function() {
		this.fb = new Firebase(rootUrl + 'todos/' + this.props.item.key);
	},
	handleInputChange: function(e) {
		this.setState({todo: e.target.value});
	},
	handleCheckboxChange: function(e) {
		var update = {done: e.target.checked};
		this.setState(update);
		this.fb.update(update);
	},
	handleInputUpdate: function(e) {
		this.fb.update({todo: e.target.value});
	},
	handleDelete: function(e) {
		this.fb.remove();
	},
	render: function() {
		return (
			<div className="input-group">
				<span className="input-group-addon">
					<input type="checkbox" checked={this.state.done} onChange={this.handleCheckboxChange} />
				</span>
				<input type="text" className="form-control" value={this.state.todo} onChange={this.handleInputChange} />
				<span className="input-group-btn">
					<button className="btn btn-default" onClick={this.handleDelete}>Delete</button>
				</span>
			</div>
		);
	}

});

module.exports = ListItem;
