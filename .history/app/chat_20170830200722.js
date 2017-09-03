import React from 'react';
import {
	AppRegistry,
	Button,
	View,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export class ChatScreen extends React.Component {
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
	Chat: { screen: ChatScreen }
});

