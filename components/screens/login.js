
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"
import buttons from "../styles/buttons.js"
import margins from "../styles/margins.js"
import bg from "../../components/images/bg.png";

//style={fonts(appSettings).header}

function Login({ navigation, route, props }){

  const globalContext = useContext(Context)
  const { isLoggedIn, appSettings } = globalContext;

  return(
      <View style={containers(appSettings).outerPage}>
          <Image source={bg} style={styles.bg} />
      <Text style={{fontFamily:'FuzzyBubbles-Bold', fontSize: 50.5, color: '#eb6123',  position: 'absolute', top: 20.5,  }}>Hello User!</Text>
      <Text style={{fontFamily:'FuzzyBubbles-Bold', fontSize: 32.5, color: 'green',  position: 'absolute', top: 100.5,  }}>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
      <TouchableOpacity style={buttons(appSettings).login} onPress={() => navigation.navigate("Content")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[buttons(appSettings).login, margins.topTenPercent]} onPress={() => navigation.navigate("Register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )



}

export default Login;

const styles = StyleSheet.create({
    bg: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});