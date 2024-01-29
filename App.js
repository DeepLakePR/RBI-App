// Imports
import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View, LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// External Style

// Views
import HomeScreen from './src/views/home/index.js';
import LoginScreen from './src/views/login/index.js';

const Stack = createNativeStackNavigator();

// Export App
export default function CoreApp() {

  // States
  const [user, setUser] = useState('');

  // IgnoreLogs and useStates
  LogBox.ignoreAllLogs(true);

  // Variables

  // Functions

  // Return the App
  return (
    <NavigationContainer>
      <View style={styles.container}>

        <StatusBar style="auto" hidden />

        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(6, 45, 62)',
  },
})