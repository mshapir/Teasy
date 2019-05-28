/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationMenu from './NavigationMenu'

 class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <NavigationMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  }
})


export default App;
