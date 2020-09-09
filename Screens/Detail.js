import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from '../components/ListItem';


export default ({navigation}) => {


  const title = navigation.getParam('title')
  const body = navigation.getParam('body')




  return(
      <View style={{backgroundColor:"#CD9BF0" ,justifyContent: "center", flex: 1}}>
        <Text style={{marginBottom:25, fontWeight:"bold", fontSize:22, textAlign: "center", color:"white"}}>
         Titulo :  {title}
      </Text>
      <Text style={{fontWeight:"400", fontSize:22, textAlign: "center", color:"white"}}>
          Cuerpo : {body}
      </Text>
    
      
         
     </View>
    );
   }