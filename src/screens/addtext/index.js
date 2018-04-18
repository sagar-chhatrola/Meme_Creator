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
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import { View,Dimensions,Alert,StatusBar,ScrollView,Image,TextInput} from "react-native";
const meme1=require('./../../../assets/meme/12144817.jpg');
class Addtext extends Component {

  constructor(props){
    super(props);
    let {width, height} = Dimensions.get('window');
    this.state={height:{height},width:{width}};
  }
  render() {
    var height=this.state.height.height;
    var width=this.state.width.width;
    
    return (
   
     
       <View style={{flex:1}}>
          <TextInput placeholder="Top Text" style={{marginTop:7,textAlign:"center"}}/>
          <Image style={{height:height/2,width:width,marginTop:7}} source={meme1} />
          <TextInput placeholder="Bottom Text" style={{marginTop:7,textAlign:"center"}}/>
       </View>

      
      
    );
  }
}

export default Addtext;
