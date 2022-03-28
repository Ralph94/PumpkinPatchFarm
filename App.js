import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Context, Provider } from './components/globalContext/globalContext.js';
import Navigator from './components/navigation/navigator.js';
import { View } from 'react-native';
import containers from './components/styles/containers.js';
import { MenuProvider } from 'react-native-popup-menu';




function App(props) {
  return (
    <MenuProvider>
    <Provider>
     <View style={{flex:1}}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </Provider>
    </MenuProvider>
  )

}







export default App;