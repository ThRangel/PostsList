import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

export default ({title, onPress}) => {

    return(
        <TouchableOpacity  onPress={onPress} style={{paddingHorizontal:15, height: 60, justifyContent:"center", borderBottomWidth: 2, borderBottomColor: "#12E5F3" }}>
           <Text style={{fontSize:20, textAlign:"center"}}> {title}</Text>
        </TouchableOpacity>
    );
}