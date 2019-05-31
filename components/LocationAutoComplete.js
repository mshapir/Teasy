import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class LocationAutoComplete extends Component {

  handleSubmit = () => {
    this.props.submitAddress(this.props.description)
    this.props.clearSearchs()
  }

  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={this.handleSubmit}>
          <Text style={styles.text}>
            {this.props.description}
          </Text>
      </TouchableOpacity>
    );
  }

}

export default LocationAutoComplete;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  }

})
