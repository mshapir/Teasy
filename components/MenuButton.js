import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



class MenuButton extends Component {

  render() {
    return (
      <Icon
        name="bars"
        size={40}
        color="#000000"
        style={styles.menuIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }

}

export default MenuButton;

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: 60,
    left: 30,
  }
})
