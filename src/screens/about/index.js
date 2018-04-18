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
import { View,Dimensions,Alert,StatusBar,ScrollView } from "react-native";

class About extends Component {

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
            <Title>About</Title>
          </Body>
          <Right />
        </Header>   
       </View>

      
      
    );
  }
}

export default About;
