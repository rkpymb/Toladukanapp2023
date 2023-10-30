
import { SafeAreaView, StyleSheet, Text, View, Alert, StatusBar, Linking } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';


import WebHome from './src/screens/WebHome'

import Splace from './src/screens/Splace'
import Test from './src/screens/Test'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const navigationRef = React.createRef();
const Stack = createNativeStackNavigator();


export default function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    Linking.getInitialURL()
      .then((url) => {
        if (url) {
          navigateToWebHome(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));

    Linking.addEventListener('url', (event) => {
      navigateToWebHome(event.url);
    });
  }, []);

  const navigateToWebHome = (url) => {
    navigationRef.current?.navigate('WebHome', { url });
  };



  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>

        <Stack.Navigator initialRouteName={Splace}>
          <Stack.Screen name="Splace" component={Splace} options={{ headerShown: false }} />
          <Stack.Screen name="WebHome" component={WebHome} options={{ headerShown: false }} />
          <Stack.Screen name="Test" component={Test} initialParams={{ url }} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </>


  );

}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
    padding: 10,
  },
});
