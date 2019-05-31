import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Geocode from "react-geocode";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { Marker } from 'react-native-maps';
import MenuButton from './MenuButton'
import PickupLocationForm from './PickupLocationForm';




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


    pickupLocation = (address) => {
      Geocode.setApiKey("AIzaSyCVR7PgR7koSSt-ljMPwMRVQFuOdc2F7Ec")
      Geocode.fromAddress(address)
      .then( response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          latitude: lat,
          longitude: lng,
          error: null
        })
        }, error => {
        console.error(error);
        }
        );
      }

  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <PickupLocationForm pickupLocation={this.pickupLocation} />
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
