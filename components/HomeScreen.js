import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView from 'react-native-maps';
import MenuButton from './MenuButton'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <MapView
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
     >
     </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default HomeScreen;
