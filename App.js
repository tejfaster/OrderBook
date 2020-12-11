import 'react-native-gesture-handler';
import * as React from 'react';
import {  View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from './src/Portfolio'
import Sell from './src/Sell'
import Body from './src/Body'
import Buy from './src/Buy'

const Stack = createStackNavigator();


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Body" component={Body}  options={{title:'WatchList'}} />
      <Tab.Screen name="Rest" component={Rest} options={{title:'Portfolio'}} />
    </Tab.Navigator>
  );
}

function Rest(){
  return(
    <Stack.Navigator initialRouteName="Protfolio">
      <Stack.Screen name="Portfolio" component={Portfolio}  options={{title:'Portfolio'}} />
        <Stack.Screen name="Sell" component={Sell}  />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">       
        <Stack.Screen name="Home" component={Home}  options={{title:'OrderBook'}} />
        <Stack.Screen name="Buy" component={Buy}  />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
