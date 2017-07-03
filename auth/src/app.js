import React, { Component } from 'react';
import { View } from 'react-native';
// import auth service database link here
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
	// componentWillMount(){
	// 	// specific authentication route goes here
	// };

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
			);
	}
}

export default App;
