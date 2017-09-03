import React from 'react';
import {
	AppRegistry,
	View,
	Button,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import 

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


AppRegistry.registerComponent('ChatScreen', () => SimpleApp);