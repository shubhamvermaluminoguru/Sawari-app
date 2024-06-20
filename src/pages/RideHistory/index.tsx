import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";
const rides =[{},{},{},{}]
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const RideHistory = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flex:0.8, width:'100%', padding:'5%', gap:10, paddingTop:'10%'}}>
                <View style={{
                    backgroundColor:'#ffef74',
                    height:screenHeight/1.5,
                    width:screenWidth*2,
                    position:'absolute',
                    top:0,
                    right:0,
                    borderBottomRightRadius:280,
                    transform   : [{ rotate: '20deg' }, {translateY: -280}],
                }}>

                </View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={{uri:'https://cdn-icons-png.freepik.com/256/84/84339.png'}} height={30} width={30} />
                        </TouchableOpacity>
                        <View>
                            <Text style={[styles.textGrey, {fontSize:22, fontFamily:'Roboto-Bold'}]}>Hi</Text>
                            <Text style={[styles.textBlack, {fontSize:28, fontFamily:'Roboto-Bold'}]}>Nicolas</Text>
                            <Text style={[styles.textGrey, {fontSize:22, fontFamily:'Roboto-Bold'}]}>How's you?</Text>
                        </View>
                        <View>
                            <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp'}} 
                            height={150} width={150} resizeMode="contain"/>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.textBlack, {fontSize:36, fontFamily:'Roboto-Black'}]}>₹ 847.23</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1, width:'100%', padding:'5%', gap:15}}>
                <Text style={[styles.textBlack, {fontSize:20, fontFamily:'Roboto-Bold'}]}>Your Rides</Text>
                {rides.map((ride, index)=>{
                    return <TouchableOpacity key={index} style={[styles.rideContainer]}>
                        <View>
                            <Text style={[styles.textBlack, {fontFamily:'Roboto-Bold', fontSize:15}]}>Feb 15,2024</Text>
                            <Text style={[styles.textBlack]}>Gurgram to Delhi</Text>
                        </View>
                         <View>
                            <Text style={[styles.textBlack, {fontSize:20, fontFamily:'Roboto-Bold'}]}>{"₹ 448.57"}</Text>
                         </View>
                    </TouchableOpacity>
                })}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    rideContainer:{
        elevation:2,
        borderRadius:8,
        flexDirection:'row',
        gap:5,
        backgroundColor:'white',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center'
    },
    textBlack:{
        fontFamily:'Roboto-Medium',
        color:'#454545'
    },
    textGrey:{
        color:'grey'
    }
})
export default RideHistory