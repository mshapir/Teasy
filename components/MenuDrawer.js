import React from 'react'
import {
   Text,
   View,
   StyleSheet,
   Platfrom,
   Dimensions,
   ScrollView,
   TouchableOpacity,
   Image
 } from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class MenuDrawer extends React.Component {

  navLink = (nav, text) => {
    return (<TouchableOpacity style={{ height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
        <View style={styles.topLinks}>
          <View style={styles.profile}>
            <View style={styles.imageView}>
               <Image style={styles.img} source={{uri: 'https://avatars2.githubusercontent.com/u/42851238?s=460&v=4'}} />
            </View>
            <View style={styles.profileText}>
            <Text style={styles.name}>Manny Shapir</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink('Home', 'Home')}
          {this.navLink('Hello', 'Hello')}
          {this.navLink('Hello', 'Past Deliveries')}
          {this.navLink('Hello', 'Payment')}
          {this.navLink('Hello', 'Settings')}
        </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    height: 100,
  },
  scroller: {
    flex: 1,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 25,
  },
  topLinks: {
    height: 200,
    backgroundColor: 'black',
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450,

  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
  },
  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: 'white',
    textAlign: 'left',
  },
  imageView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  }
})

export default MenuDrawer;
