import React, { Component } from 'react';
import { Text } from 'react-native';
// import files for authentication
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {

	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;
		
		this.setState({ error: '', loading: true });

		// code here that calls LOGIN request with (email, password) prob use axiom
		// .then(this.onLoginSuccess.bind(this)) 
		// .catch(() => {
		// 		// code for calling SIGN UP with (email, password)
			// .then(this.onLoginSuccess.bind(this))
		// 		.catch(this.onLoginFail.bind(this));
		// 		});
		// });
	}

	onLoginSuccess() {
		this.setState({ 
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false })
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
					Log in
				</Button>
		)
	}

	render() {
		return (
			<Card>
			<CardSection>
				<Input 
				placeholder="user@gmail.com"
				label="Email"
				value={this.state.email}
				onChangeText={email => this.setState({ email })}
				/>
			</CardSection>

			<CardSection>
				<Input
					secureTextEntry
					placeholder="password"
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
				/>
			</CardSection>

			<Text>
				{this.state.error}
			</Text>

			<CardSection>
				{this.renderButton()}
			</CardSection>
			</Card>
			)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export { LoginForm };