import { AppRegistry } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { SCR01 } from './app/screens/SCR01'
import { SCR02 } from './app/screens/SCR02'

const root =  createMaterialBottomTabNavigator({
  SCR01: { screen: SCR01 },
  SCR02: { screen: SCR02 }
}, {
  initialRouteName: 'SCR01',
  shifting: true,
  barStyle: {
    backgroundColor: '#ccc'
  }
})

AppRegistry.registerComponent('phonenumber', () => root)
