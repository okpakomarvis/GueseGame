import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../Card';
import Color from '../../constants/colors';
import Input from '../input';
import EnterNumber from '../enteredNumber';
import MainButton from '../MainButton';

const startGameScreen = (props) => {
	const [ enterValue, setenterValue ] = useState('');
	const [ confirmed, setConfirmed ] = useState(false);
	const [ selectedNumber, setSelectedNumber ] = useState();

	const enterInputHandler = (enterText) => {
		setenterValue(enterText.replace(/[^0-9]/g, ''));
	};
	const resetHandler = () => {
		setenterValue('');
		setConfirmed(false);
	};
	const confirmedHandler = () => {
		const confirmednumber = parseInt(enterValue);
		if (isNaN(confirmednumber) || confirmednumber < 0 || confirmednumber > 99) {
			Alert.alert('invalid number!', 'Number should be 0 and 99', [
				{ Text: 'Okay', style: 'destructive', onPress: resetHandler }
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(confirmednumber);
		setenterValue('');
		Keyboard.dismiss();
	};
	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.screenView}>
				<Text>you select</Text>
				<EnterNumber>{selectedNumber}</EnterNumber>
				<MainButton onPress={props.onStartGame.bind(this, selectedNumber)}>START GAME</MainButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game</Text>
				<Card style={styles.inputContainer}>
					<Text style={{ fontFamily: 'open-sans' }}>Select a Number</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCorrect={false}
						autoCapitalize='none'
						keyboardType='number-pad'
						onChangeText={enterInputHandler}
						value={enterValue}
						maxLength={2}
					/>
					<View style={styles.inputButtons}>
						<View style={styles.button}>
							<Button title='Reset' color={Color.secondary} onPress={resetHandler} />
						</View>
						<View style={styles.button}>
							<Button title='comfirm' color={Color.primary} onPress={confirmedHandler} />
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: 'open-sans-bold'
	},
	inputContainer: {
		width: 300,
		alignItems: 'center',
		maxWidth: '80%'
	},
	inputButtons: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 15
	},
	button: {
		width: '40%'
	},
	input: {
		width: 50,
		textAlign: 'center'
	},
	screenView: {
		paddingTop: 20,
		textAlign: 'center',
		alignItems: 'center'
	}
});

export default startGameScreen;
