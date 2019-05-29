import React from 'react'
import { Platfrom , Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import HelloWorld from './components/HelloWorld'
import MenuDrawer from './components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH*0.75,
  contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const NavigationMenu = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Hello: {
      screen: HelloWorld
    },
  },
  DrawerConfig
);

export default createAppContainer(NavigationMenu);
