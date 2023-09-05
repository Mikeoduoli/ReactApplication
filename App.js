import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen.js';
import BookScreen from './screens/BookScreen.js';
import ConfirmScreen from './screens/ConfirmScreen.js';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
         name="Home" component={HomeScreen} 
         options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'dodgerblue'} size={26} />
          ),
        }}
        />

      <Tab.Screen 
        name="Book" component={BookScreen} 
        options={{
        tabBarLabel: 'Book',
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={'dodgerblue'} size={26} />
          ),
        }}
        />

      <Tab.Screen 
        name="Confirm" component={ConfirmScreen} 
        options={{
        tabBarLabel: 'Confirm',
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'cdodgerblue'} size={26} />
          ),
        }}
        />

    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home" component={HomeScreen}
          />

        <Stack.Screen 
          options={{headerShown: false}}
          name="BookScreen" component={BookScreen} 
          />

        <Stack.Screen 
          options={{headerShown: false}}
          name="ConfirmScreen" component={ConfirmScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;