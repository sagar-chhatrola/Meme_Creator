import React from "react";

import { StackNavigator,TabNavigator,DrawerNavigator } from "react-navigation";
import {Icon} from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Favourite from "./screens/favourite";
import Saved from "./screens/saved";
import Setting from "./screens/setting";
import About from "./screens/about";
import Human from "./screens/human";
import Animal from "./screens/animal";
import Cartoon from "./screens/cartoon";
import Rage from "./screens/rage";
import Sidebar from "./screens/sidebar";
import Addtext from "./screens/addtext";

import {Easing,Animated,Platform,Button} from 'react-native';
export const MyTabNav  = TabNavigator({

    Human: {screen: Human},
    Animal : {screen : Animal},
    Cartoon : {screen : Cartoon},
    Rage : {screen : Rage}
    
    },

    {
     tabBarOptions: {
            initialRouteName: 'Human',
            activeTintColor: '#fff',
            inactiveTintColor: '#e0e0e0',
            
            showIcon: false,
            showLabel: true,
            style: {
                    backgroundColor:'#3D51B4'
            },
            indicatorStyle: {
            backgroundColor: 'red',
            }
        },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }

);

const Drawer = DrawerNavigator(
  {
     MyTabNav : {screen:MyTabNav},
    Saved: { screen: Saved,navigationOptions: {
      header: null,
    } },
    Favourite: { screen: Favourite,navigationOptions: {
      header: null,
    } },
    Setting: { screen: Setting,navigationOptions: {
      header: null,
    } },
    About: { screen: About,navigationOptions: {
      header: null,
    } },
  },
  {
    initialRouteName: "MyTabNav",
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />
  }

);

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}
  const transitionConfig1 = () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-width, 0, width],
          }),
        }]
      };
    },
    headerTitleInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-50, 0, 50],
          }),
        }]
      };
    },
  })
const AppNavigator = StackNavigator(
  {
    Drawer : {screen : Drawer,navigationOptions:{header: null}},
    Addtext :{screen : Addtext,navigationOptions: {title: 'Add Text',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center',color:"#fff"},
        headerStyle:{
            backgroundColor:'#3D51B4',
        },headerTintColor:"#fff" }}

  },
  {
    initialRouteName: "Drawer",
    transitionConfig

  }

);

export default () =>
    
    <AppNavigator />
