import React from 'react';
import {
	AppRegistry,
	Button,
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

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen }
});

module.exports = ChatScreen;