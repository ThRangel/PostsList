/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './Screens/Users'
import PostsScreen from './Screens/Posts'
import DetailScreen from './Screens/Detail'
import InicioScreen from './Screens/Inicio'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import CustomFontsProvider, {useCustomFont} from "react-native-custom-fonts";


const AppNavigator  = createStackNavigator  ({

Users: {
  screen : UsersScreen,
},
Posts : {
  screen: PostsScreen,
},
Detail :{
  screen : DetailScreen,
},
Inicio :{
  screen : InicioScreen,
}

}
, {
   initialRouteName : 'Inicio',
})

const AppContainer = createAppContainer(AppNavigator);



export default function App() {

 
/*
  const [fonstLoaded, setFontsLoaded] = useState(false);

useEffect(()=>{
  console.log("useEfect")
  if(!fonstLoaded){
    LoadFonts();
   
  }
  
});

const LoadFonts = async () =>{
  console.log("LoadFonts")
  await Font.loadAsync({
    'Montserrat-Regular' : require('./assets/fonts/Montserrat-Regular.ttf')
  });
  setFontsLoaded(true);
}
*/

    return (
     <AppContainer />
    );
  

  
  
}