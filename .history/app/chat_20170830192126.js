import React from 'react';
import {
	AppRegistry,
	Text,
} from 'react-native';

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

AppRegistry.registerComponent('ChatScreen', () => ChatScreen);