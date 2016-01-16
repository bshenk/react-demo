var React = require('react');
var PropTypes = React.PropTypes;

var NewTodo = React.createClass({
	handleClick: function() {
		this.addTodo();
	},
	handleKeyDown: function(e) {
		//If Enter key is pressed
		if(e.keyCode == 13) {
			this.addTodo();
		}
	},
	addTodo: function() {
		//If input field is not empty
		if(!this.state.text == '') {
			//Add input to db
			this.props.data.push({
				todo: this.state.text,
				done: false
			});
			//Reset input form
			this.setState({
				text: ''
			});
		} else {
			console.log('No text was entered.');
		}
	},
	handleInputChange: function(e) {
		this.setState({
			text: e.target.value
		});
	},
	getInitialState: function() {
		return {
			text: ''
		};
	},
 	render: function() {
		return (
			<div className="newTodo">
				<div className="input-group">
					<input
						value={this.state.text}
						type="text"
						className="form-control"
						onKeyDown={this.handleKeyDown}
						onChange={this.handleInputChange}
					/>
					<span className="input-group-btn">
						<button onClick={this.handleClick} className="btn btn-default" type="button">
							Add
						</button>
					</span>
				</div>
			</div>
		);
	}
});

module.exports = NewTodo;
