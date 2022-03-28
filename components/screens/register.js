
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"
import inputs from "../styles/inputs.js"
import margins from "../styles/margins.js"
import buttons from "../styles/buttons.js"
import bg from "../../components/images/bg3.png";

function Register({ navigation, route, props }){

  const globalContext = useContext(Context)
  const { setIsLoggedIn, appSettings, domain, userObj, setUserObj, setToken } = globalContext;

  const [securePassword, setSecurePassword] = useState(true)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleLogin() {

    setError("")

    let body = JSON.stringify({
      'username': email.toLowerCase(),
      'email': email.toLowerCase(),
      'first_name': firstName,
      'last_name': lastName,
      'password': password
    })

    fetch(`${domain}/api/v1.0/user/create-user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:body
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          setError("User already exists")
          throw res.json()
        }
      })
      .then(json => {
        setUserObj(json)
        setToken(json.token)
        setIsLoggedIn(true)
      })
      .catch(error => {
        console.log(error)
      })

  }



  return(
    <View style={containers(appSettings).outerPage}>
      <Image source={bg} style={styles.bg} />
      <View style={containers(appSettings).formBox}>
        <Text style={styles.h1}>REGISTER</Text>

        <Text style={fonts(appSettings).errorLabel}>{error}</Text>

        <Text style={[fonts(appSettings).inputLabel]}>First Name</Text>
        <TextInput value={firstName} onChangeText={text => setFirstName(text)} textContentType="name" autoCompleteType="email" style={inputs(appSettings).inputText} placeholder='First Name'/>


        <Text style={[fonts(appSettings).inputLabel]}>Last Name</Text>
        <TextInput value={lastName} onChangeText={text => setLastName(text)} textContentType="name" autoCompleteType="email" style={inputs(appSettings).inputText} placeholder='Last Name'/>


        <Text style={[fonts(appSettings).inputLabel]}>Email Address</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} textContentType="username" autoCompleteType="email" style={inputs(appSettings).inputText} placeholder='Email'/>

        <Text style={[fonts(appSettings).inputLabel]}>Password</Text>
        <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={securePassword} textContentType="password" autoCompleteType="password" style={inputs(appSettings).inputText} placeholder='Password'/>

        <TouchableOpacity style={[buttons(appSettings).login, margins.topTenPercent]} onPress={() => handleLogin()}>
          <Text>Register</Text>
        </TouchableOpacity>


      </View>
    </View>
  )



}

export default Register;


const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

   bg: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});
