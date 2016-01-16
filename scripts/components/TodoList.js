var React = require('react');
var PropTypes = React.PropTypes;

//React Components
var ListItem = require('./ListItem');

var TodoList = React.createClass({
	renderList: function() {
		if(!this.props.data) {
			return (
				<h3>Add a todo to get started.</h3>
			);
		} else {
			var list = [];

			for(var key in this.props.data) {
				//Manually set item.key as unique db key
				var item = this.props.data[key];
				item.key = key;

				//Push new ListItem to db
				list.push(
					<ListItem item={item} key={key} />
				);
			}

			return list;
		}
	},
	render: function() {
		return (
			<div className="todoList">
				{this.renderList()}
			</div>
		);
	}

});

module.exports = TodoList;
