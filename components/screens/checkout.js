import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Pressable} from "react-native";
import bg from "../../components/images/bg3.png";
import bgModal from "../../components/images/modalBg.png";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers";
import fonts from "../styles/fonts";
import buttons from "../styles/buttons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import ding from "../../components/sounds/ding.mp3";
import cha_ching from "../../components/sounds/cha-ching.mp3";
import pumpkingYell from "../../components/sounds/pumpkingYell.mp3";
import Sound from 'react-native-sound';

// play ding sound

function Checkout({ navigation, route, props }) {
    const [isModalVisible, setModalVisible] = useState(false);
    
    const [soundObject, setSoundObject] = useState(new Sound(pumpkingYell, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
    }));

    const [soundObject2, setSoundObject2] = useState(new Sound(ding, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
    }));

    const alertMessage = () => {
    alert(
        "Thank you for your purchase! Please come again!",
      

    )
  }


    return (
        <View style={styles.container}>
            <Image source={bg} style={styles.bg} />

            <Text style={styles.text}>Pumpkin Has Been Purchased!</Text><Entypo style={styles.emoji} name="emoji-happy" />
            <Button title="Pricing"  onPress={() => {
                setModalVisible(true);
                 soundObject.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                        soundObject.reset();
                     }
                });
            }} />
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <Image source={bgModal} style={styles.bg} />
                    <Text style={styles.modalText}>Pumpkin price</Text>
                    <Text style={styles.modalText}>$10</Text>
                    <TouchableOpacity onPressIn={() => alertMessage ()}>
                    <Button  title="Please Head To The Front To Get Your Item" onPress={() => {
                            setModalVisible(false);
                            alertMessage();
                        }} />
                    </TouchableOpacity>
                </View>
            </Modal>
            <Pressable onPress={() => navigation.navigate("FarmMenu")} onPressIn = {() => {
                soundObject2.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                        soundObject2.reset();
                    }
                });
            }}>
                <Text style={{ backgroundColor: 'transparent', color: 'orange', fontSize: 30, fontWeight: 'bold', marginBottom: 50, marginTop: 50,}}>Continue Shopping</Text>
            </Pressable>
        </View>
    );
}

export default Checkout;




const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    text: {
        fontSize: 25.7,
        color: '#EEEB27',
        fontFamily: 'BeVietnamPro-Bold',
        fontWeight: 'bold',
        marginBottom: 50,
        marginTop: 50,

        
    },

    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    modalText: {
        fontSize: 30,
        fontFamily: 'BeVietnamPro-Bold',
        color: '#000100',

    },

    emoji: {
        marginTop: -25,
        marginBottom: 100,
        color: '#EEEB27',
        fontSize: 50,
    },




});
        





   


