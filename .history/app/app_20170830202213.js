import React from 'react';
import {
	AppRegistry,
	Button,
	View,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ChatScreen } from './chat';

class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { state, setParams } = navigation;
		const isInfo = state.params.mode === 'info';
		const { user } = state.params;
		return {
			title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
			headerRight: (
				<Button
					title={isInfo ? 'Done' : `${user}'s info`}
					onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
				/>
			),
		};
	}
	render() {
		const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
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