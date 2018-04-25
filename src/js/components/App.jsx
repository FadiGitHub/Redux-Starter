import React, { Component } from 'react';
import { func1 } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		let {} = this.props;
		return <div className="app">Hello Redux</div>;
	}
}

App.propTypes = {};

function mapStateToProps(state) {
	return {
		test: state.test
	};
}

export default connect(mapStateToProps, { func1 })(App);
