import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from "react-native";
import bg from "../../components/images/bg3.png";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers";
import fonts from "../styles/fonts";
import buttons from "../styles/buttons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import ding from "../../components/sounds/ding.mp3";
import Sound from 'react-native-sound';
function Checkout() {
  const [isModalVisible, setModalVisible] = useState(false);

            

  return (
      <View style={styles.container}>
          <Image source={bg} style={styles.bg} />
          
          <Text style={styles.text}>Pumpkin Has Been Purchased!</Text><Entypo style={styles.emoji} name="emoji-happy" />
          <Button title="Pricing" onPress={() => {
              setModalVisible(true);
          }} />
          <Modal isVisible={isModalVisible}>
              <View style={styles.modal}>
                  <Text style={styles.modalText}>Pumpkin price</Text>
                  <Text style={styles.modalText}>$10</Text>
                  <Button title="Please Head To The Front To Get Your Item" onPress={() => {
                      setModalVisible(false);
                  }} />
              </View>
            </Modal>
         
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
        fontSize: 25,
        color: '#000100',
        fontFamily: 'BeVietnamPro-Bold',
        marginTop: 50,
        marginBottom: 50,

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
        





   


