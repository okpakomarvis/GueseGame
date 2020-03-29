import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};
const styles = StyleSheet.create({
	input: {
		marginVertical: 10,
		borderBottomColor: 'grey',
		borderBottomWidth: 1
	}
});

export default Input;
