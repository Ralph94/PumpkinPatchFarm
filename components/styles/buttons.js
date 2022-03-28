import React, { useContext } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const buttons = (appSettings) => StyleSheet.create({
    button: {
        backgroundColor: 'grey',
        color: ("foregroundColor" in appSettings) ? appSettings['foregroundColor'] : "green",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        margin: 60,
        borderRadius: 10,

        
    },

    login: {
    width: "100%",
    height: 35,
    backgroundColor: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

    


});

export default buttons;