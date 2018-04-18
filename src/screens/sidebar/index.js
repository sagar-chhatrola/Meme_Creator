import React, { Component } from "react";
import { Image,Alert,BackHandler,AsyncStorage,View } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./styles";
/*import CustomIcon from './../../components/CustomIcon';*/
const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");

const datas = [
  {
    name: "Create",
    route: "MyTabNav",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Favourite",
    route: "Favourite",
    icon: "phone-portrait",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Saved",
    route: "Saved",
    icon: "phone-portrait",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "Setting",
    route: "Setting",
    icon: "phone-portrait",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "About",
    route: "About",
    icon: "phone-portrait",
    bg: "#DA4437",
    types: "4"
  }
];

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  logout(){
    Alert.alert(
  'Elshanta Logout',
  'Are you sure want to exit ?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => {BackHandler.exitApp()}},
  ],
  { cancelable: false }
)
  }
  render() {
    return (
        <View style={{flex:1}}>
        <View  style={styles.drawerCover} />
          <Text style={styles.drawerImage}>Meme Creator</Text>
           <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
               
              </ListItem>}
          />
        </View>
    );
  }
}

export default Sidebar;
