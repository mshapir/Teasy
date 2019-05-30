import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { Marker } from 'react-native-maps';
import MenuButton from './MenuButton'




class HomeScreen extends React.Component {
  state={
    latitude: 0,
    longitude: 0,
    error: null
  }

  componentDidMount(){
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      }, error => this.setState({error: error.message}),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <MapView
         style={styles.map}
         region={{
           latitude: this.state.latitude,
           longitude: this.state.longitude,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
     >
     <Marker coordinate={this.state} />
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
