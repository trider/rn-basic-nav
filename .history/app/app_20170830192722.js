import React from 'react';
import {
	AppRegistry,
	View,
	Button,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		<View>
			<Text>Hello, Chat App!</Text>
		</View>
	}
}


const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);