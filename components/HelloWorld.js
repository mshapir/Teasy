import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MenuButton from './MenuButton';


 class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <Text style={styles.text}> Welcome to Teasy! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  }
})

export default HelloWorld;
