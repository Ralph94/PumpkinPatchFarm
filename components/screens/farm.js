import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import bg2 from "../../components/images/bg2.png";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers";
import fonts from "../styles/fonts";
import buttons from "../styles/buttons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from '@ant-design/icons';
import FarmMenu from '../screens/farmMenu.js';

    


function Farm({ navigation, route, props }) { // raffp735@gmail.com 

    const globalContext = useContext(Context);
    const { isLoggedIn, appSettings } = globalContext;
    
    console.log("App Is Running At 100%")

    return (
        <TouchableOpacity style={containers(appSettings).outerPage} onPress={() => navigation.navigate("FarmMenu")}>
         <View style={styles.container}>
            <Image source={bg2} style={styles.bg} />
            <Text style={{fontFamily:'FuzzyBubbles-Bold', fontSize: 50.5, color: '#eb6123',  position: 'absolute', top: 20.5,  }}>Pumpkin Patch</Text>
                <Text style={{fontFamily:'FuzzyBubbles-Bold', fontSize: 32.5, color: 'green',  position: 'absolute', top: 100.5,  }}>Choose Your Pumpkin</Text>
                <Text style={fonts(appSettings).h2}>You are {(isLoggedIn) ? '' : 'Not'} logged in</Text>
            </View>
            </TouchableOpacity>
    )
}

export default Farm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },

    bg: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },

    text: {
        fontSize: 50,
        color: '#FF7518',
        textAlign: "center",
        margin: 10,
        color: "white",
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
    },

    h1: {
        fontSize: 50,
        textAlign: "center",
        margin: 10,
        color: "white",
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
    },

    textButton: {
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        fontFamily: "Cochin",
        color: "blue",
    },

    touch: {
        backgroundColor: "grey",
        width: 100,
        height: 50,
        borderRadius: 10,
        margin: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    smileIcon: {
        color: "black",
        marginBottom: 50,

    },

});