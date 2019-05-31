import React, { Component } from 'react';
import { GoogleAutoComplete } from 'react-native-google-autocomplete'
import LocationAutoComplete from './LocationAutoComplete';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';


class PickupLocationForm extends Component {

  state={
    address: ''
  }

  handleChange = (event) => {
    this.setState({
      address: event.value
    })
  }

  submitAddress = (address) => {
     this.props.pickupLocation(address);
     this.setState({ address });

  }


  render() {
    return (
      <View style={styles.form}>
          <GoogleAutoComplete
            apiKey=''
            debounce={300}
            >
            {({ handleTextChange, locationResults, isSearching, inputValue, clearSearchs }) => (
              <React.Fragment>
              {console.log(locationResults)}
                <View>
                  <TextInput
                      style={styles.textInput}
                      placeholder="Pickup location..."
                      onChangeText={handleTextChange}
                      value={inputValue}

                    />
                </View>
                {isSearching && <ActivityIndicator size='large' color='black'/>}
                <ScrollView>
                  {locationResults.map(res => {
                    return <LocationAutoComplete key={res.id} {...res} submitAddress={this.submitAddress} clearSearchs={clearSearchs}/>
                  })}
                </ScrollView>
              </React.Fragment>
            )}
           </GoogleAutoComplete>
        </View>
    );
  }
}

export default PickupLocationForm;

const styles = StyleSheet.create({
  form: {
    zIndex: 9,
    position: "absolute",
    top: 75,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 200,
    fontSize: 15,
  }
})
