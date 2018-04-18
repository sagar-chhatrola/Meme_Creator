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
import { View,Dimensions,Alert,StatusBar,ScrollView,Text,Image,TouchableOpacity } from "react-native";
const meme1=require('./../../../assets/meme/12144817.jpg');
const meme2=require('./../../../assets/meme/42.jpg');
const meme3=require('./../../../assets/meme/download(1).png');
const meme4=require('./../../../assets/meme/download.png');
const meme5=require('./../../../assets/meme/images(1).jpg');
const meme6=require('./../../../assets/meme/images(2).jpg');
const meme7=require('./../../../assets/meme/images(3).jpg');
const meme8=require('./../../../assets/meme/images(4).jpg');
const meme9=require('./../../../assets/meme/images.jpg');
const meme10=require('./../../../assets/meme/images.png');
const meme11=require('./../../../assets/meme/kim%20kardashian%20gym%20kardashian.png');
const meme12=require('./../../../assets/meme/Meme_baby_Sammy.png');

class Human extends Component {

  constructor(props){
    super(props);
    let {width, height} = Dimensions.get('window');
    this.state={height:{height},width:{width}};
  }
  render() {
    var height=this.state.height.height;
    var width=this.state.width.width-30;
   
    return (
      
        <View>
        <View>
           <CustomHeader name="Meme Creator"/>
        </View>
        <View>
        <ScrollView>
       <View style={{flexWrap:"wrap",flexDirection:"row"}}>
          
            <View style={{height:width/3,width:width/3,margin:5}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Addtext')}>
              <Image  style={{height:width/3,width:width/3}} source={meme1} />
              </TouchableOpacity>
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme2} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme3} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme4} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme5} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme6} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme7} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme8} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme9} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme10} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme11} />
            </View>
            <View style={{height:width/3,width:width/3,margin:5}}>
              <Image style={{height:width/3,width:width/3}} source={meme12} />
            </View>
            
       </View>
       </ScrollView>
       </View>
       </View>
      
    );
  }
}

export default Human;
