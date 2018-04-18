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

import { View,Dimensions,Alert,StatusBar,ScrollView,Text } from "react-native";

class CustomHeader extends Component {

  constructor(props){
    super(props);
    let {width, height} = Dimensions.get('window');
    this.state={height:{height}};
    //Alert.alert(JSON.stringify(this.state.height));
  }
  render() {
    var height=this.state.height.height;
    
    return (
           <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.name}</Title>
            </Body>
            <Right>
            <View style={{flex:1,flexDirection:"row"}}>
             
              <Icon style={{marginLeft:55,color:"#fff"}} size={25} name="ios-camera" />
              <Icon style={{marginLeft:40,color:"#fff"}} size={25} name="ios-image" />
            </View>
          </Right>
        </Header>  
      
    );
  }
}

export default CustomHeader;
