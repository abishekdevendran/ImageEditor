import React from 'react';
import { View } from 'react-native';

const ThemedView = ({
	children,
	classStyle
}: {
	children: any;
	classStyle?: any;
}) => {
	return (
		<View className={'bg-base-100 dark:bg-base-100-dark' + ' ' + classStyle}>
			{children}
		</View>
	);
};

export default ThemedView;
