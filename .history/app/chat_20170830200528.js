import React from 'react';
import {
	AppRegistry,
	Button,
	View,
	Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export const ChatScreen = ({ navigation, banner }) => (
	<View>
		<Text>Chat with Lucy</Text>
	</View>
);

// export class ChatScreen extends React.Component {
// 	static navigationOptions = {
// 		title: 'Chat with Lucy',
// 	};
// 	render() {
// 		return (
// 			<View>
// 				<Text>Chat with Lucy</Text>
// 			</View>
// 		);
// 	}
// }
