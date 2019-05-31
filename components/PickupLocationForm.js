import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


class PickupLocationForm extends Component {

  state={
    address: ''
  }

  handleChange = (address) => {
    this.setState({
      address
    })

  }

  render() {
    return (
      <View style={styles.form}>
        <TextInput
            style={styles.textInput}
            placeholder="Set pickup location"
            onChangeText={this.handleChange}
            value={this.state.address}
          />
          <TouchableOpacity onPress={() => this.props.pickupLocation(this.state.address)}>
            <Text>Enter</Text>
          </TouchableOpacity>
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 30,
    width: 200,
    fontSize: 15,
  }
})
