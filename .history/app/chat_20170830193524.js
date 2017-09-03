import React from 'react';
import {
	AppRegistry,
	View,
	Button,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import './chat'

class ChatScreen extends React.Component {
	static navigationOptions = {
		title: 'Chat with Lucy',
	};
	render() {
		return (
			<View>
				<Text>I'm chatting with Lucy</Text>
			</View>
		);
	}
}