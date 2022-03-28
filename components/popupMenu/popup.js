import React, { useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated, Image, Dimensions, Modal, Alert} from "react-native";
import pumpkinPatch from "../../components/images/pp.png";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers";
import fonts from "../styles/fonts";
import buttons from "../styles/buttons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';





const Popup = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Menu style={styles.Mainmenu}>
            <MenuTrigger style={styles.menu}><Text style={styles.buttonText}>Happy With Your Pickings?</Text></MenuTrigger>
            <MenuOptions style={styles.menuOptions}>   
            <MenuOption onSelect={() => navigation.navigate("Checkout")}>
            <Text style={styles.menumainTxt}>You Sure? <Entypo name="sina-weibo" size={25} color="white" /></Text>
            </MenuOption>
            <MenuOption onSelect={() => Alert.alert('Pumpkin Patch Farm', 'Heading Back To Pumpkin Patch')}>
            <Text style={styles.menumainTxt2}>Go Back To Your Order <Entypo name="sina-weibo" size={25} color="white" /></Text>
            </MenuOption>
        </MenuOptions>
        </Menu>
        </View>

    )
};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontFamily: 'BeVietnamPro-Bold',
        textAlign: 'center',
        margin: 10,
        color: '#EEEB27',
        backgroundColor: '#F4831B',
        padding: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000100',
    },

    menumainTxt: {
        fontSize: 18,
        fontFamily: 'BeVietnamPro-Bold',
        textAlign: 'center',
        margin: 10,
        color: '#EEEB27',
        backgroundColor: '#F4831B',
        padding: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000100',
    },

    menumainTxt2: {
        fontSize: 15,
        fontFamily: 'BeVietnamPro-Bold',
        textAlign: 'center',
        margin: 10,
        color: '#EEEB27',
        backgroundColor: '#000100',
        padding: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000100',
    },


});



export default Popup;
