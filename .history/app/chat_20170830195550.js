import React from 'react';
import {
	AppRegistry,
	Button,
	View,
	Text,
} from 'react-native';


export class ChatScreen extends React.Component {
	static navigationOptions = {
		title: 'Chat with Lucy',
	};
	render() {
		return (
			<View>
				<Text>Chat with Brian</Text>
			</View>
		);
	}
}
