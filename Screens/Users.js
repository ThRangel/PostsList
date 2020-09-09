import React,{useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from "../components/ListItem"
 /*
const users = [
  {id :"1", name: "Anaconda de agua puerca"},
  {id :"2", name: "Capuchino"},
  {id :"3", name: "Saydi la vaca"},
  {id :"4", name: "Coro Gay"},
  {id :"5", name: "Sra. Reyna Malevola"},

]
*/

export default ({navigation}) => {
  const [loading, setLoading] = useState(true); 
  const [users, setUsers] = useState([]);

  const fetchUsers = async () =>{
 
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()
   console.log(data)
   setUsers(data)
   setLoading(false)


  }

  useEffect(()=> {
    fetchUsers()
  }, [])
    return(
      <View style={{justifyContent: "flex-start", flex: 1, alignItems: "flex-start", backgroundColor: "#D2F09B"}}>
     {
       loading?
       
       <Text style={{textAlign: "center", color: "#CD9BF0", fontWeight:"bold"}}>Cargando...</Text>
       
       :
     
       <FlatList data = {users}
                 style={{alignSelf: "stretch"}}
                 keyExtractor = {x => String(x.id)}
                 renderItem = {  ({item}) => <ListItem onPress={() => navigation.navigate('Posts', {user_id: item.id})} title = {item.name}/> }
      
      />

     }

    </View>
    );
   }