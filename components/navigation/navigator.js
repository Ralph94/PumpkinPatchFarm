import React, { useContext } from 'react';
import { Context } from "../globalContext/globalContext.js";
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Home from '../screens/home.js'
import Content from '../screens/content.js'
import Farm from "../screens/farm.js";
import FarmMenu from '../screens/farmMenu.js';
import Register from '../screens/register.js';
import Login from '../screens/login.js';
import Checkout from '../screens/checkout.js';

const Stack = createStackNavigator();

function Navigator(props) {
  const globalContext = useContext(Context);
  const { isLoggedIn } = globalContext;

  return(
    <Stack.Navigator initialRouteName="Home">
      {(!isLoggedIn) ?
          <> 
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          
          </>
        :
        <>
        <Stack.Screen name="Farm" component={Farm} options={{ headerShown: false }} />
          <Stack.Screen name="FarmMenu" component={FarmMenu} options={{ headerShown: false }} />
          <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        </>
        

      }

    </Stack.Navigator>

  )



}


export default Navigator;