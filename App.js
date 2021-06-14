import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./Screens/WelcomeScreen";
import {AppSwitchNavigator} from "./components/AppSwitchNavigator"
import {createAppContainer} from "react-navigation"

export default class App extends React.Component{
  render(){
  return (
  <AppContainer></AppContainer>
  )}
}

const AppContainer =  createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
