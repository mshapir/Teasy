import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Geocode from "react-geocode";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { Marker } from 'react-native-maps';
import MenuButton from './MenuButton'
import BackButton from './BackButton'
import PickupLocationForm from './PickupLocationForm';




class HomeScreen extends React.Component {
  state={
    latitude: 0,
    longitude: 0,
    error: null,
    setButtonClicked: false
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
      Geocode.setApiKey("AIzaSyBHB3UMHJNEgWjkZR1zaAx0lzMHJEqUFxs")
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

      handleButton = () => {
        this.setState({
          setButtonClicked: !this.state.setButtonClicked
        })
      }

      locationSet = () => {
        this.setState({
          setButtonClicked: !this.state.setButtonClicked
        })
      }

      back = () => {
        this.setState({
          setButtonClicked: !this.state.setButtonClicked
        })
      }



  render() {
    return (
        this.state.setButtonClicked ?
          <View style={styles.container}>
          <BackButton back={this.back} />
          <PickupLocationForm pickupLocation={this.pickupLocation} locationSet={this.locationSet} />
          </View>
          :
          <View style={styles.container}>
         <MenuButton navigation={this.props.navigation} />
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
         <TouchableOpacity style={styles.button} onPress={this.handleButton} >
         <Text style={styles.text}> Set pick up and drop off</Text>
         </TouchableOpacity>
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
 button: {
   flex: 1,
   padding: 10,
   zIndex: 9,
   position: "absolute",
   backgroundColor: '#ff5733',
   borderRadius: 25,
   justifyContent: 'flex-end',
   bottom: 125
 },
 text: {
   fontSize: 25,
   color: 'white'
 }
});

export default HomeScreen;
