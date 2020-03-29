import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../constants/colors';

const MainButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 30,
		backgroundColor: Color.primary
	},
	buttonText: {
		color: 'white',
		alignItems: 'center',
		fontFamily: 'open-sans-bold',
		fontSize: 18
	}
});
export default MainButton;
