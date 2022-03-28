import React, { useContext } from 'react';
import { StyleSheet, Dimensions } from 'react-native';



const fonts = (appSettings) => StyleSheet.create({
  h1: {
    color: ("foregroundColor" in appSettings) ? appSettings['foregroundColor'] : "green",
    fontSize: 30.5,
    fontWeight: "bold",
    textAlign: "center",
    width: "50%",
    color: '#eb6123',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    fontFamily: 'BeVietnamPro-Bold',

  },

  topText: {
    color: ("foregroundColor" in appSettings) ? appSettings['foregroundColor'] : "green",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "50%",
    color: '#000100',
    position: 'absolute',
    top: 500,
    left: 160,
    bottom: 0,
    fontFamily: 'FuzzyBubbles-Bold',

  },

  header: {
    color: ("foregroundColor" in appSettings) ? appSettings['foregroundColor'] : "red",
    fontSize: 30.5,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    color: '#eb6123',
    position: 'absolute',
    top: 0,
    left: -10,
    fontFamily: 'FuzzyBubbles-Bold',

  },

  header2: {
    color: ("foregroundColor" in appSettings) ? appSettings['foregroundColor'] : "red",
    fontSize: 30.5,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    color: '#eb6123',
    position: 'absolute',
    top: 0,
    left: -190,
    right: 0,
    bottom: 0,
    fontFamily: 'BeVietnamPro-ExtraBold',

  },


  h2: {
    color: '#eb6123',
    fontSize: 45,
    fontFamily: 'BeVietnamPro-Bold',
    fontWeight: "bold",
    textAlign: "center",
  },

  p: {
    color: "green",
    fontSize: 30,
    fontFamily: 'FuzzyBubbles-Bold',
    fontWeight: "bold",
    textAlign: "center",
    position: 'absolute',
    top: 50,
    margin: 0,
  },

  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'BeVietnamPro-ExtraBold',
    color: '#000100',
  },

  errorLabel: {
    width: "100%",
    textAlign: "center",
    color: "white"
  }



});

export default fonts;