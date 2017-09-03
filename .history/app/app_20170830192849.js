import React from 'react';
import {
	AppRegistry,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen }
});




class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		return <Text>Hello, Navigation!</Text>;
	}
}

class ChatScreen extends React.Component {
	static navigationOptions = {
		title: 'Chat with Lucy',
	};
	render() {
		return (
			<View>
				<Text>Chat with Lucy</Text>
			</View>
		);
	}
}



AppRegistry.registerComponent('SimpleApp', () => SimpleApp);