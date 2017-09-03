import React from 'react';
import {
	AppRegistry,
	View,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

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



class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		<View>
			<Text>Hello, Chat App!</Text>
			<Button
				onPress={() => navigate('Chat')}
				title="Chat with Lucy"
			/>
		</View>
	}
}

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);