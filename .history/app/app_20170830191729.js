import React from 'react';
import {
	AppRegistry,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import



class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		return <Text>Hello, Navigation!</Text>;
	}
}

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);