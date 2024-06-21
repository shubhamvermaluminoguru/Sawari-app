import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import AnimatedBg from "../../compoments/AnimatedBg";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native-gesture-handler";
import RideCard from '../../compoments/RideCard'
const UpcomingRides =[{},{},{}]
const UpcomingRidesScreen =()=>{
    const navigation =useNavigation();

    return <View style={styles.pageContainer}>
    <AnimatedBg/>
    <View style={styles.pageContent}>
        <TouchableOpacity style={{position:'absolute', top:30, left:20, backgroundColor:'#ddd', 
        padding:7, paddingVertical:10, borderRadius:30}}
        onPress={()=>navigation.goBack()}
        >
        <Image source={{uri:'https://cdn-icons-png.freepik.com/256/130/130882.png?semt=ais_hybrid'}} 
        height={15} width={20} 
        />
        </TouchableOpacity>
   
        <View>
            <Text style={styles.titleText}>Upcoming Rides</Text>
        </View>
        <FlatList
          data={UpcomingRides}
          keyExtractor={() => Math.random().toString()}
          renderItem={(item)=>{
            return <RideCard />
          }}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          style={{width:'100%', paddingVertical:20, height:'100%'}}
        />

    </View>
</View>
}

const styles= StyleSheet.create({
    pageContainer:{
        flex:1,zIndex:2000
    },
    pageContent:{
        flex:1,
        alignItems:'center', 
        width:'100%',
        gap:32,
        paddingVertical:30,
        marginTop:30
    },
    titleText:{
        fontFamily:'Roboto-Black', 
        fontSize:23, 
        color:'#3a3a3a',
    },
    button:{
      backgroundColor:'#3f3f3f', 
      borderRadius:15, 
      paddingVertical:10,
      paddingHorizontal: 20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:10,
      height:70,
      width:'100%'
    },
    buttonText:{
      fontFamily:'Roboto-Black', 
      fontSize:20, 
      color:'white',
    }
})


export default UpcomingRidesScreen