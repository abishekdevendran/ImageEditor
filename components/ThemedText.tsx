import React from 'react';
import { Text } from 'react-native';

const ThemedText = ({
	children,
	classStyle
}: {
	children: any;
	classStyle?: any;
}) => {
	return (
		<Text className={'text-primary dark:text-dark' + ' ' + classStyle}>
			{children}
		</Text>
	);
};

export default ThemedText;
