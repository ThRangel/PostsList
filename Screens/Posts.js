import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from '../components/ListItem';


export default ({navigation}) => {

  const {userID} = navigation.getParam('user_id')
  const [loading, setLoading] = useState(true); 
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () =>{
 
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await response.json()
   console.log(data)
   setPosts(data)
   setLoading(false)


  }

  useEffect(()=> {
    fetchPosts()
  }, [])

    return(
      <View style={{backgroundColor: "#F2F6C7", justifyContent: "flex-start", flex: 1, alignItems: "flex-start"}}>
     {
       loading?
       
       <Text style={{textAlign:"center"}}>Cargando...</Text>
       
       :
     
       <FlatList data = {posts.filter(x => x.userID === userID)}
                 style={{alignSelf: "stretch"}}
                 keyExtractor = {x => String(x.id)}
                 renderItem = {  ({item}) => <ListItem onPress={() => navigation.navigate('Detail',{title: item.title, body: item.body})} title = {item.title}/> }
      
      />

     }

    </View>
    );
   }