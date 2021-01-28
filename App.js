import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthProvider from './src/contetexts/auth';
import 'react-native-gesture-handler';
import Routes from './src/routes/index';
import {NavigationContainer} from '@react-navigation/native'


export default function App() {
 return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar style='auto'/>
      <Routes/>
     </AuthProvider>
   </NavigationContainer>
  );
}