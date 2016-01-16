var React = require('react');
var PropTypes = React.PropTypes;

//Firebase DB
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://torrid-torch-4017.firebaseio.com/';

//React Components
var NewTodo = require('./NewTodo');
var TodoList = require('./TodoList');

var App = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
		return {
			data: {},
			loaded: false
		};
	},
	handleDataLoaded: function() {
		this.setState({
			loaded: true
		});
	},
	componentWillMount: function() {
		//Binds Firebase DB to this.state.todos
		this.fb = new Firebase(rootUrl + 'todos/');
		this.bindAsObject(this.fb, 'data');
		this.fb.on('value', this.handleDataLoaded);
	},
	deleteButton: function() {
		if(!this.state.loaded) {
			return null
		} else {
			return (
				<button className="btn btn-default" onClick={this.handleDeleteCompleted}>Delete Completed</button>
			);
		}
	},
	handleDeleteCompleted: function() {
		for(var key in this.state.data) {
			if(this.state.data[key].done === true) {
				this.fb.child(key).remove();
			}
		}
	},
	render: function() {
		return (
			<div className="app">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-md-offset-3">
							<h1>bshenk's todo list</h1>
							<NewTodo data={this.firebaseRefs.data} /><hr className="divider" />
							<div className={"content" + (this.state.loaded ? " loaded" : "")}>
								<TodoList data={this.state.data} loaded={this.state.loaded} />
								{this.deleteButton()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = App;
