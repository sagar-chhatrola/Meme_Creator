import React from "react";
import Setup from "./src/boot/setup";
export default class App extends React.Component {

  componentDidMount () {
     //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
     
  }
  render() {
    return <Setup />;
  }
}
