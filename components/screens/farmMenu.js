import React, { useContext, useState, useRef } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, FlatList, Animated, Image, Dimensions, Modal, Button, Pressable, Alert} from "react-native";
import pumpkinPatch from "../../components/images/pp.png";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers";
import fonts from "../styles/fonts";
import buttons from "../styles/buttons";
import Popup from "C:/Users/Raffp/Desktop/React_Native_Learning/React_Native_Learning_Frontend/components/popupMenu/popup.js"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MeImage from '../../components/images/me.png';
import Entypo from 'react-native-vector-icons/Entypo';
import ding from "../../components/sounds/ding.mp3";
import cha_ching from "../../components/sounds/cha-ching.mp3";
import cha_ching2 from "../../components/sounds/buttonClick.mp3";
import Sound from 'react-native-sound';
import popularData from "../../assets/pumpkinData/pumpkinData.js";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';




function FarmMenu({ navigation, route, props }) { // raffp735@gmail.com



    const { width, height } = Dimensions.get("window");
    const ITEM_WIDTH = width * 0.76;
    const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
    const globalContext = useContext(Context); // this is our global state object that we imported from globalContext.js and passed into this component as a prop called globalContext
    const { isLoggedIn, appSettings } = globalContext;
    const [modalVisible, setModalVisible] = useState(false);
    const [isModalVisible, setModalVisible2] = useState(false);
    const [name, setName] = useState(popularData);


    const [soundObject, setSoundObject] = useState(new Sound(cha_ching, Sound.MAIN_BUNDLE, (error) => { // the way this works is that it will play the sound object when the button is pressed and then it will reset the sound object when the button is pressed again. Sound.MAIN_BUNDLE is the path to the sound file.
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
    }));

    //const [soundObject2, setSoundObject2] = useState(new Sound(cha_ching2, Sound.MAIN_BUNDLE, (error) => {
        //if (error) {
            //console.log('failed to load the sound', error);
            //return;
        //}
    //}));

    const [sound,  setSound] = useState(new Sound(cha_ching2, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
    }));

    playSound = () => {
        this.sound.play()
    }
    



    const images = [
        "https://images.unsplash.com/photo-1566220036246-08bc2fc902a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        "https://images.unsplash.com/photo-1602457471441-e7099c989338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1603947214027-2c4c36cc4dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1506918565526-a15fdf909f8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1506900039127-b1cb41deb557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        "https://images.unsplash.com/photo-1506372243740-26eb4f00cd11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    ];

    const data = popularData.map((item, index) => ({
        key: String(index),
        weight: item.weight,
        rating: item.rating,
        photo: item.image,
        name: item.name,
        avatar_url: 'C:/Users/Raffp/Desktop/React_Native_Learning/React_Native_Learning_Frontend/components/images/me.png',
        
    }));



      /*
    const data = popularData.map((item, index) => ({
        key: String(index),
        photo: item.image,
        name: item.name,
        avatar_url: 'C:/Users/Raffp/Desktop/React_Native_Learning/React_Native_Learning_Frontend/components/images/me.png',
        price: item.price,
        weight: item.weight,
        rating: item.rating

    }))
    */


    console.log("App Is Running At 100%")

    const scrollx = React.useRef(new Animated.Value(0)).current;

    const alertMessage = () => {
    Alert.alert(
      'Pumpkin Patch Farm',
        'Best pumpkin patch farm in the world!',
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
        

    )
  }

    return (

        <View style={styles.container}>
            <Image source={pumpkinPatch} style={styles.bg} />
            <Animated.FlatList
                scrollEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={data}
                extraData={data}
                keyExtractor={(item) => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }],
                { useNativeDriver: true }

                )}



                renderItem={({ item, index }) => { // this is the renderItem function that will be called for each item in the data array.
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ];
                    const translateX = scrollx.interpolate({
                        inputRange,
                        outputRange: [-width * .7, 0, width * .7],
                    });


                    return (
                        <View style={{ width, justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{
                                borderRadius: 18,
                                borderWidth: 10,
                                borderColor: '#000100',
                                shadowColor: '#000',
                                shadowOpacity: 0.5,
                                shadowRadius: 30,
                                shadowOffset: {
                                    width: 0,
                                    height: 0,
                                },
                                borderRadius: 18,
                                padding: 12,
                                backgroundColor: 'orange',
                            }}>
                                <View style={{
                                    width: 325.5,
                                    height: ITEM_HEIGHT,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    borderRadius: 14,


                                }}>
                                    <Animated.Image source={{ uri: item.photo }} style={{
                                        width: ITEM_WIDTH * 1.4,
                                        height: ITEM_HEIGHT,
                                        resizeMode: "cover",
                                        transform: [{ translateX }],



                                    }}
                                    />
                                </View>
                                <TouchableOpacity onPress={() => alertMessage()}>
                                <Text style={styles.TopHeader}>Pumpkin Patch Farm</Text>
                                </TouchableOpacity>
                                
                                <Image source={MeImage} style={{
                                width: 80,
                                height: 80,
                                resizeMode: "cover",
                                borderRadius: 60,
                                borderWidth: 6,
                                position: 'absolute',
                                bottom: 50,
                                right: 40,


                            }}
                                />
                                <Text style={styles.popularText}>{item.name}</Text>
                                <Text style={styles.popularText}>{item.weight}</Text>
                                <Text style={styles.popularText}>{item.rating}</Text>
                                <Pressable onPress={() => navigation.navigate("Checkout")} onPressIn = {() => {
                                    soundObject.play((success) => {
                                        if (success) {
                                            console.log('successfully finished playing');
                                        } else {
                                            console.log('playback failed due to audio decoding errors');
                                            soundObject.reset();
                                        }
                                    });
                                }}>
                                    
                                     <Text style={{ backgroundColor: 'black', color: '#eb6123', fontSize: 20.5, fontWeight: 'bold', fontFamily: 'BeVietnamPro-Bold', marginBottom: 25, marginTop: 25, width: '50%', textAlign: 'center' }}>Purchase <Entypo name="star" size={25} color="#eb6123" />        
                                    </Text>
                                </Pressable><AntDesign name="aliwangwang" size={20.5} color="black" style={{ position: 'absolute', bottom: 130, right: 30.5 }} />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}














export default FarmMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'cover',
    },

    buttonText: {
        fontSize: 18,
        fontFamily: 'FuzzyBubbles-Bold',
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
        fontFamily: 'FuzzyBubbles-Bold',
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
        fontFamily: 'FuzzyBubbles-Bold',
        textAlign: 'center',
        margin: 10,
        color: '#EEEB27',
        backgroundColor: '#000100',
        padding: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000100',
    },

    popularItem: {
        width: '100%',

    },

    popularText: {
        fontSize: 20.5,
        width: "100%",
        fontFamily: 'FuzzyBubbles-Bold',
        textAlign: 'center',
        margin: 10,
        color: '#EEEB27',
        
        


    },

    pumpkinInfo: {
        fontSize: 15,
        fontFamily: 'FuzzyBubbles-Bold',
        textAlign: 'center',
        color: '#000100',
        width: '100%',
    },

    TopHeader: {
        fontSize: 20.5,
        fontFamily: 'FuzzyBubbles-Bold',
        textAlign: 'center',
        color: '#EEEB27',
        backgroundColor: '#F4831B',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000100',
        padding: 10,
        marginBottom: 10,   

    },







});
