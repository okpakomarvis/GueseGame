import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Screen from './components/screens/StartGameStreen';
import GameScreen from './components/screens/GameScreen';
import GameOverScreen from './components/screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFont = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [ startGameNum, setGameNum ] = useState();
	const [ gueseRounds, setgueseRound ] = useState(0);
	const [ dataloaded, setDataloaded ] = useState(false);

	if (!dataloaded) {
		return <AppLoading startAsync={fetchFont} onFinish={() => setDataloaded(true)} />;
	}

	const configureNewGame = () => {
		setgueseRound(0);
		setGameNum(null);
	};
	const startGameHandler = (enterNumber) => {
		setGameNum(enterNumber);
		setgueseRound(0);
	};
	const gameOverHandler = (numOfrounds) => {
		setgueseRound(numOfrounds);
	};
	let content = <Screen onStartGame={startGameHandler} />;
	if (startGameNum && gueseRounds <= 0) {
		content = <GameScreen userChoice={startGameNum} onGameOver={gameOverHandler} />;
	}
	else if (gueseRounds > 0) {
		content = <GameOverScreen NumberRounds={gueseRounds} userNumber={startGameNum} onGameRestart={configureNewGame} />;
	}
	return (
		<View style={styles.container}>
			<Header title='Gues a Number' />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
