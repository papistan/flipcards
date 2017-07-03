import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
			  value={value}
			  onChangeText={onChangeText}
			  style={{ height: 20, width: 100 }}
			/>
		</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
	},
	labelStyle: {
		
	};
	containerStyle: {
		
	}
}

export { Input };
