import React,{useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import AnimatedBg from "../../compoments/AnimatedBg";
import TextInputV1 from "../../compoments/TextInputV1";
import { useNavigation } from '@react-navigation/native';
import Animated from "react-native-reanimated";

import {useThemeContext} from '../../../App'

const Profile = () => {
    const [userInfo, setUserInfo] = useState({})
    const navigation =useNavigation();
    const {theme} = useThemeContext();


const styles= StyleSheet.create({
    pageContainer:{
        flex:1,
        zIndex:2000,
        backgroundColor: theme.secondary
    },
    pageContent:{
        flex:1,
        alignItems:'center', 
        width:'100%',
        gap:32,
        paddingVertical:30,
        marginTop:30,
    },
    titleText:{
        fontFamily:'Roboto-Black', 
        fontSize:23, 
        color:theme.textClr2,
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
    return (
        <View style={styles.pageContainer}>
            <AnimatedBg backgroundColor={theme.secondary}/>
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
                    <Text style={styles.titleText}>Edit Profile</Text>
                </View>
                <View>
                      <Animated.Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp'}}
                       height={120} 
                       width={120} 
                       resizeMode="contain"
                       style={{borderRadius:70, borderColor:'black', borderWidth:1, backgroundColor:'white'}}
                       sharedTransitionTag="profilePic"
                       />
                </View>
                <Text style={{fontFamily:'Roboto-Black', fontSize:20, color:'#777', textAlign:'center',
                    paddingHorizontal:25
                }}>You are just one step away from booking your ride.</Text>
                <View style={{width:'100%', paddingHorizontal:40, gap:20}}>
                    <TextInputV1 
                         placeholder="First Name"
                         value={''}
                         onChangeText={() => {}}
                         borderColor={theme.textClr2}
                    />
                    <TextInputV1 
                         placeholder="Last Name"
                         value={''}
                         onChangeText={() => {}}
                         borderColor={theme.textClr2}
                    />
                    <TextInputV1 
                         placeholder="Date of Birth"
                         value={''}
                         onChangeText={() => {}}
                         borderColor={theme.textClr2}
                    />
                </View>
                <View style={{width:'100%',  padding:30, marginBottom:20, marginTop:60}}>
                     <TouchableOpacity style={styles.button} >
                          <Text style={styles.buttonText}>Update</Text>
                      </TouchableOpacity>
                </View>
                <View></View>
            </View>
        </View>
    );
};


export default Profile;