import React, { Component } from 'react';
import { Text } from 'react-native';
// import files for authentication
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {

	state = { email: '', password: '', error: '' };

	onButtonPress() {
		const { email, password } = this.state;
		
		this.setState({ error: ''});

		// code here that calls LOGIN request with (email, password) prob use axiom
		// then 
		.catch(() => {
				// code for calling SIGN UP with (email, password)
				.catch(() => {
					this.setState({ error: 'Authentication Failed.' })
					
				});
		});


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
				<Button onPress={this.onButtonPress.bind(this)}>
					Log in
				</Button>
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