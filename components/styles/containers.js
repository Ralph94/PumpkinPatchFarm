import React, { useContext } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const containers = (appSettings) => StyleSheet.create({
  outerPage: {
    color: ("foregroundColor" in appSettings)? appSettings['foregroundColor'] : "#000000",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 0,
    margin: 0,
  },

  textBox: {
    height: 350,
    width: 200,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 20,
    margin: 0,
    padding: 10,
  },


});

export default containers;