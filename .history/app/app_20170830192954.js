import React from 'react';
import {
	AppRegistry,
	Button,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

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
				<Button
					onPress={() => navigate('Chat')}
					title="Chat with Lucy"
				/>
			</View>
		);
	}
}

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen }
});


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);