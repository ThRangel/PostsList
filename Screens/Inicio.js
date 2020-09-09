import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,
        heightPercentageToDP as hp, 
        listenOrientationChange as loc,
        removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font'


let customFonts = {
    'Montserrat-Regular': require('./Montserrat-Regular.ttf')
   
  };

export default class Inicio extends React.Component{

    

    componentDidMount() {
      
 
        console.log("did mount VERTICAL")
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
        console.log("HORIZONTAL")
      }
      render(){

    return(
      <ScrollView>
        <View style={{flex:1}}>
      <View style={{justifyContent: "center" , flex: 1, alignItems: "center", backgroundColor: "#F6D2C7" }}>
     <Text style={{fontSize: 22, color: "white", fontWeight:"bold", padding: 20}}>
       INICIO Screen!!
     </Text>
     <View style={{width:wp('84.5%') , height:hp('17%'), borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around'  }}>
         <Text style={{color: "black", fontSize:22, fontFamily: "Lemonada"}}>Letra de LEMONADA </Text>
         <Text style={{color: "black", fontSize:22, fontFamily:"Montserrat-Regular" }}>Letra de Montserrat</Text>
         <Text style={{color: "black", fontSize:22, fontFamily:"Cochin"}}>Letra Cochin de font family</Text>
     </View>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor: "#12E5F3",width: wp('80%') , height: 50 ,flexDirection: 'column',
    justifyContent: 'space-around', marginTop:50 }}
             onPress={() => this.props.navigation.navigate('Users')}>
         <Text style={{textAlign: "center", fontSize:22, fontWeight: "bold", color: "white"}}>Iniciar</Text>
     </TouchableOpacity>
   </View>
   </View>
   </ScrollView>
    );
        


   }
}