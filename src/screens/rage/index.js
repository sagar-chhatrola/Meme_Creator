import React, { Component } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import CustomHeader from './../../component/header';
import { View,Dimensions,Alert,StatusBar,ScrollView,Text } from "react-native";

class Rage extends Component {

  constructor(props){
    super(props);
    let {width, height} = Dimensions.get('window');
    this.state={height:{height}};
    //Alert.alert(JSON.stringify(this.state.height));
  }
  render() {
    var height=this.state.height.height;
    
    return (
       <View style={{flex:1}}>
          <View>
          <CustomHeader name="Rage"/>
        </View>
             
       </View>
    );
  }
}

export default Rage;
