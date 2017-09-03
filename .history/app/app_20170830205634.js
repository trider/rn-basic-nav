import React from 'react';
import {
	AppRegistry,
	Button,
	View,
	Alert,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ChatScreen } from './chat';

class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) =>  {
		return {
			title: 'Welcome Here !!',
			headerRight: (<Button title="Info"
				onPress={() => Alert.alert('Test', 'Test')}	
						/>),
		}
	};
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