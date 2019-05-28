import { Platfrom , Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import HelloWorld from './components/HelloWorld'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH*0.65,
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
