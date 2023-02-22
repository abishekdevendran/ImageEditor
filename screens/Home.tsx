import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Camera from '../components/Camera';
import { Platform } from 'react-native';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type Props=NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}:Props) => {
	return (
		<ThemedView classStyle="flex-1 items-center justify-center h-full w-full">
			<ThemedText>Home</ThemedText>
			{Platform.OS === 'web' ? (
				<ThemedText>Camera not supported on web</ThemedText>
			) : (
				<Camera navigation={navigation}/>
			)}
			<StatusBar style="auto" />
		</ThemedView>
	);
};

export default Home;
