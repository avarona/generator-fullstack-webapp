import React, { Component } from 'react';
import { connect } from 'react-redux';

import Example from '../components/Example.jsx';
import { exampleUpdate } from '../redux/reducers/example';

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<h1>App Container</h1>
        <Example />
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ example }) => ({ example });

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(exampleUpdate())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
