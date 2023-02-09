import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './styles'

export default function App() {
	return (
		<View className="w-full h-full flex-1 items-center justify-center bg-gray-400">
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
