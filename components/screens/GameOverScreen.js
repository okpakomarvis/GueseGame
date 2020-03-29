import React from 'react';
import { View, Text, StyleSheet, Button, Image, ColorPropType } from 'react-native';
import Color from '../../constants/colors';
import MainButton from '../MainButton';
const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.family}>GAME OVER</Text>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/success.png')} style={styles.image} />
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>
					Your Phone needed <Text style={styles.highlight}>{props.NumberRounds}</Text>, to guese the number{' '}
					<Text style={styles.highlight}>{props.userNumber}</Text>
				</Text>
			</View>
			<MainButton onPress={props.onGameRestart}>NEW GAME</MainButton>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: 10
	},
	image: {
		width: '100%',
		height: '100%'
	},
	family: {
		fontFamily: 'open-sans-bold',
		fontSize: 20
	},
	text: {
		fontFamily: 'open-sans',
		fontSize: 16,
		marginVertical: 5
	},
	container: {
		marginVertical: 10,
		marginHorizontal: 30
	},
	highlight: {
		color: Color.primary
	}
});
export default GameOverScreen;
