import React, { Component } from 'react';
import { View } from 'react-native';
// import auth service database link here
import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	// componentWillMount(){
	// 	// specific authentication route goes here
	// };

// function to set state change based on login status, pass in: ((user) => {
// 	if (user) {
// 		this.setState({ loggedIn: true });
// 	} else {
// 		this.setState({ loggedIn: false });
// 	};
// }

renderContent() {
	switch (this.state.loggedIn) {
		case true:
			<Button>Log Out</Button>
		case false: 
		 return <LoginForm />;
		default: 
			return ( 
				<View style={styles.spinnerStyle}>
			 		<Spinner size="large" />
			 	</View>
			 )
	}
}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	spinnerStyle: {
	alignSelf: 'center',
	paddingTop: 8
	}
}


export default App;
