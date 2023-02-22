import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import Home from './screens/Home';
import Picture from './screens/Picture';
import './styles';
import { RootSiblingParent } from 'react-native-root-siblings';

export type RootStackParamList = {
	Home: undefined;
	Picture: { uri: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
	const colorScheme = useColorScheme();
	return (
		<RootSiblingParent>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: colorScheme === 'dark' ? '#222239' : '#fff'
						},
						headerTintColor: colorScheme === 'dark' ? '#fff' : '#000'
					}}
					initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ freezeOnBlur: true }}
					/>
					<Stack.Screen name="Picture" component={Picture} />
				</Stack.Navigator>
			</NavigationContainer>
		</RootSiblingParent>
	);
}
