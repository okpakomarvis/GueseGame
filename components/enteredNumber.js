import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/colors';

const EnterNumber = (props) => {
	return (
		<View style={styles.EnterNumber}>
			<Text style={styles.Number}>{props.children}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	EnterNumber: {
		alignItems: 'center',
		justifyContent: 'center',
		color: Color.secondary,
		borderColor: Color.secondary,
		borderWidth: 1,
		marginVertical: 10,
		borderRadius: 10,
		padding: 10
	},
	Number: {
		textAlign: 'center',
		color: Color.secondary,
		fontSize: 22
	}
});

export default EnterNumber;
