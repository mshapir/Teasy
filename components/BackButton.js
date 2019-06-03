import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



class BackButton extends Component {

  render() {
    return (
      <Icon
        name="arrowleft"
        size={40}
        color="#000000"
        style={styles.backIcon}
        onPress={this.props.back}
      />
    );
  }

}

export default BackButton;

const styles = StyleSheet.create({
  backIcon: {
    zIndex: 9,
    position: "absolute",
    top: 60,
    left: 30,
  }
})
