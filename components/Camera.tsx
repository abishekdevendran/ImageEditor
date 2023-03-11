// RN component for camera and camera permissions

import React, { useEffect, useState, useRef } from 'react';
import { Pressable } from 'react-native';
import { AutoFocus, Camera, CameraType } from 'expo-camera';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import * as MediaLibrary from 'expo-media-library';
import Toast from 'react-native-root-toast';

const CameraComponent = ({
	navigation
}: {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		navigation.addListener('focus', () => {
			setIsLoaded(true);
		});
		navigation.addListener('blur', () => {
			setIsLoaded(false);
		});
	});
	const [permission, requestPermission] = Camera.useCameraPermissions({
		get: true,
		request: false
	});
	const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions(
		{
			get: true,
			request: true
		}
	);
	const [cameraType, setCameraType] = useState(CameraType.back);
	const [image, setImage] = useState<string | null>(null);
	const cameraRef = useRef<Camera>(null);
	const takePicture = async () => {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			setImage(photo.uri);
			//save image locally
			MediaLibrary.saveToLibraryAsync(photo.uri);
			//generate toast to say so
			mediaPermission?.granted
				? Toast.show('Image saved to gallery', {
						duration: Toast.durations.SHORT,
						position: Toast.positions.BOTTOM,
						shadow: true,
						animation: true,
						hideOnPress: true,
						delay: 0
				  })
				: Toast.show('Gallery permission not given', {
						duration: Toast.durations.SHORT,
						position: Toast.positions.BOTTOM,
						shadow: true,
						animation: true,
						hideOnPress: true,
						delay: 0
				  });
			//navigate to picture screen
			navigation.navigate('Picture', { uri: photo.uri });
		}
	};
	// manage permissions
	useEffect(() => {
		console.log('permission', permission);
		if (!permission) {
			requestPermission();
		}
	}, [permission, requestPermission]);
	useEffect(() => {
		console.log('MediaPermission', mediaPermission);
		if (!mediaPermission) {
			requestMediaPermission();
		}
	}, [mediaPermission, requestMediaPermission]);
	return (
		<ThemedView classStyle="w-full h-full flex-1 items-center justify-center">
			{permission?.granted ? (
				<>
					{isLoaded && (
						<Camera
							className="aspect-[9/16] w-10/12"
							autoFocus={AutoFocus.on}
							type={cameraType}
							ratio="16:9"
							ref={cameraRef}
						/>
					)}
					<Pressable
						onPress={() =>
							setCameraType(
								cameraType === CameraType.back
									? CameraType.front
									: CameraType.back
							)
						}>
						<ThemedText
							classStyle={
								'text-[30px] bg-[#000999] rounded-full px-4 py-1 mt-4'
							}>
							Flip
						</ThemedText>
					</Pressable>
					<Pressable onPress={takePicture}>
						<ThemedText classStyle="text-[30px] bg-[#000999] rounded-full px-4 py-1 mt-4">
							Take Picture
						</ThemedText>
					</Pressable>
				</>
			) : (
				<ThemedText>No permission</ThemedText>
			)}
		</ThemedView>
	);
};

export default CameraComponent;
