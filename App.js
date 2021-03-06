/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';
import PictogramHome from './src/assets/pics/home_icon.png';
import SideDrawer from './src/my_drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if (name === 'Home') {
    iconImagePath = require('./src/assets/pics/home_icon.png')
  } else if (name === 'User') {
    iconImagePath = require('./src/assets/pics/user.png')
  } else if (name === 'Message') {
    iconImagePath = require('./src/assets/pics/message.png')
  }

  return (
    <Image
      style = {{
        width: focused ? 30 : 20,
        height: focused ? 30 : 20,
      }}
      source = {iconImagePath}
    />
  )
}

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//         <DrawerItem
//           label="Help"
//           onPress={ () => Linking.openURL('http://www.google.com')}
//           icon={ () => <LogoTitle/>}
//         />
//         <DrawerItem
//           label="Info"
//           onPress={ () => alert('Info Window')}
//         />
//     </DrawerContentScrollView>
//   )
// }

class App extends Component {

  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40}}
  //       source={require('./src/assets/pics/home_icon.png')}
  //     />
  //   )
  // }


  render () {
    return (
      // == Tab ==
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            },
            labelPosition: 'below-icon' // below-icon, beside-icon
          }}
          screenOptions={ ({route}) => ({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => (
              TabBarIcon(focused, route.name)
            )
          })}
        >
          <Tab.Screen name="Home" component={TabHomeScreen}/>
          <Tab.Screen name="User" component={TabUserScreen}/>
          <Tab.Screen name="Message" component={TabMessageScreen}/>
        </Tab.Navigator>
      </NavigationContainer>



      // == Drawer ==
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     drawerType="front" // front, slide, permanent
      //     drawerPosition="right"
      //     drawerStyle={{
      //       backgroundColor: '#c6cbef',
      //       width: 200
      //     }}
      //     drawerContentOptions={{
      //       activeTintColor: 'red',
      //       activeBackgroundColor: 'skyblue'
      //     }}
      //     // drawerContent={props => <CustomDrawerContent {...props}/>}
      //     drawerContent={props => <SideDrawer {...props}/>}
      //   >
      //     <Drawer.Screen
      //       name="Home"
      //       component={DrawerHomeScreen}
      //       options={{
      //         drawerIcon: () => (
      //           <Image
      //             source={PictogramHome}
      //             style={{width: 40, height: 40}}
      //           />
      //         )
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={DrawerUserScreen}/>
      //   </Drawer.Navigator>
      // </NavigationContainer>



      // == Stack ==
      // <NavigationContainer>
      //   <Stack.Navigator 
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612',
      //       }
      //     }}
      //   >
      //     <Stack.Screen 
      //       name="Home" 
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={ () => alert('This is INFO')}
      //             color='orange'
      //           />
      //         )
      //       }}
      //     />
      //     <Stack.Screen 
      //       name="User" 
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Haha',
      //         userLastName: 'Do',
      //       }}
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink',
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple',
      //         }
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
