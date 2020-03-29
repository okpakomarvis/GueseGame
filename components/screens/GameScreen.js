import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberInput from '../enteredNumber';
import Card from '../Card';
import MainButton from '../MainButton';
import { Ionicons } from '@expo/vector-icons';

const generateNum = (min, max, exclude) => {
	const mins = Math.ceil(min);
	const maxs = Math.floor(max);
	const rnum = Math.floor(Math.random(mins) * (mins - maxs) + maxs);
	if (rnum === exclude) {
		return generateNum(min, max, exclude);
	}
	else {
		return rnum;
	}
};

const GameScreen = (props) => {
	const [ guseNumber, setgueseNumber ] = useState(generateNum(1, 100, props.userChoice));
	const [ rounds, setRounds ] = useState(0);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	const { userChoice, onGameOver } = props;
	useEffect(
		() => {
			if (guseNumber === props.userChoice) {
				props.onGameOver(rounds);
			}
		},
		[ guseNumber, userChoice, onGameOver ]
	);

	const computerGuese = (direction) => {
		if (
			(direction === 'lower' && guseNumber < props.userChoice) ||
			(direction === 'greater' && guseNumber > props.userChoice)
		) {
			Alert.alert("Please don't lie", 'You know that is wrong', [ { style: 'cancel', text: 'Sorry' } ]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = guseNumber;
		}
		else {
			currentLow.current = guseNumber;
		}
		const nextGuese = generateNum(currentLow.current, currentHigh.current, guseNumber);
		setgueseNumber(nextGuese);
		setRounds((currentRouns) => currentRouns + 1);
	};
	return (
		<View style={styles.screen}>
			<Text>Gues a Number</Text>
			<NumberInput>{guseNumber}</NumberInput>
			<Card style={styles.inputContainer}>
				<MainButton onPress={computerGuese.bind(this, 'lower')}>
					<Ionicons name='md-remove' size={24} color='white' />
				</MainButton>
				<MainButton onPress={computerGuese.bind(this, 'greater')}>
					<Ionicons name='md-add' size={24} color='white' />
				</MainButton>
			</Card>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20
	}
});

export default GameScreen;
