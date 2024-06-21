import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import AnimatedBg from "../../compoments/AnimatedBg";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native-gesture-handler";
import RideCard from '../../compoments/RideCard'

interface ThemeSelectorProps{
  icon: string
  text: string
  onPress: () => void
}
const ThemeSelector=(props: ThemeSelectorProps)=>{
   const {icon, text, onPress} = props
  return <TouchableOpacity onPress={onPress} style={themeStyle.container}>
       <Text style={themeStyle.text}>{text}</Text>
       <Image source={{uri: icon}} width={100} height={100} resizeMode="contain" style={{marginTop:-100, borderColor:'#454545', borderWidth:5, borderRadius:100, backgroundColor:'white'}}/>
  </TouchableOpacity>
}

const themeStyle = StyleSheet.create({
   container:{
    borderWidth:3,
    borderColor:'#454545',
    borderRadius:10,
    width:'90%',
    height:100,
    backgroundColor:'white',
    elevation:5,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
   },
   text:{
    fontFamily:'Roboto-Black',
    color:'#454545',
    fontSize:16
   }
})

const ThemesScreen =()=>{
    const navigation =useNavigation();

    return <View style={styles.pageContainer}>
    {/* <AnimatedBg/> */}
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
            <Text style={styles.titleText}>Theme</Text>
        </View>
        <Text style={[styles.titleText, {fontFamily:'Roboto-Medium', fontSize:15}]}>You can customize your app with themes</Text>
        <View style={{flexGrow:1, justifyContent:'space-around', width:'100%', alignItems:'center', }}>
            <ThemeSelector 
              icon= 'https://cdn-icons-png.freepik.com/512/8419/8419601.png'
              text= 'Dark Theme'
              onPress = {()=>{}}
            />
            <ThemeSelector 
              icon= 'https://cdn-icons-png.freepik.com/512/6643/6643046.png'
              text= 'Light Theme'
              onPress = {()=>{}}
            />
            <ThemeSelector 
              icon= 'https://e1.pngegg.com/pngimages/387/910/png-clipart-flader-82-default-icons-for-apple-app-mac-os-x-system-pref-gray-gear-thumbnail.png'
              text= 'System Default'
              onPress = {()=>{}}
            />
        </View>

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
        fontSize:20, 
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


export default ThemesScreen