import React, { useEffect, useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { useSharedValue, FadeInDown, FadeOut } from 'react-native-reanimated';
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import ProfileAndMenu from "../../compoments/ProfileAndMenu";
const { width, height } = Dimensions.get('window');


const CouponScreen =()=>{
  const navigation = useNavigation();
  const sheetHeight = useSharedValue(Math.floor(height*0.6));
  const sheetWidth = useSharedValue(Math.floor(width*0.8));

  const rideData = useSelector((state:any)=>state.ride)
  const [fareSheetInfo, setFareSheetInfo] = useState<{ name: string, value: any }[]>([]);

  useEffect(()=>{
     const info = [
       {name: 'From', value: rideData.from},
       {name: 'To', value: rideData.to},
       {name: 'Car TYpe', value: rideData.type},
       {name: 'Per Km', value: rideData.price},
       {name: 'Total Km', value: rideData.distance},
       {name: 'Ride Price', value: rideData.price * rideData.distance},
       {name: 'Tax', value: rideData.price * rideData.distance * 0.2},
       {name: 'Total', value: rideData.price * rideData.distance + rideData.price * rideData.distance  * 0.2},
     ]

     setFareSheetInfo(info)
  },[rideData])


  const handleCoupon = () => {
 
  };

    return(
        <View style={{flex:1, }}>
          <ProfileAndMenu/>
         <ImageBackground src={'https://camo.githubusercontent.com/2931b1e56daacb6c9a5c6cb8f751369385978b9d6ba9908bac2a4d5f7b6ef4fa/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67'} 
         style={{flex:1, alignItems:'center', backgroundColor:'black'}}
         resizeMode={'cover'}
         >
          <View style={{flex:1, backgroundColor:'rgba(150, 150, 150, 0.2)', width:'100%', 
          justifyContent:'center', alignItems:'center',
          padding:20
          }}>
          
          <Animated.View  style={{
                height:sheetHeight,
                width:sheetWidth, 
                borderRadius:20,
              }}
              entering={FadeInDown}
              // exiting={FadeOut}
              >
                <View 
                    style={{display:'flex', flex:1, justifyContent:'center', alignItems:'center'}} 
                        // blurType="light"
                        // blurAmount={1}
                        // blurRadius={2}
                        // reducedTransparencyFallbackColor="white"
                    >
                  <View style={styles.locationForm}>
                      <Text style={{fontSize:25, color:'#454545', fontWeight:700, fontFamily:'Roboto-Black', }}>Faresheet</Text>
                      
                      <View style={{flexDirection:'column', gap:10, marginTop:'auto'}}>
                      
                      {fareSheetInfo.map((info)=>{
                        return <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', 
                        paddingTop: info.name === 'Total' ? 15 : 0}}>
                          <Text style={styles.label}>{info.name}</Text>
                          <Text style={styles.label}>{info.value}</Text>
                        </View>

                      })}
                        
                      </View>
                      <View style={{flexDirection:'row', gap:20}}>
                          <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                              <Text style={styles.buttonText}>Cancle</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.button} onPress={handleCoupon}>
                              <Text style={styles.buttonText}>Go</Text>
                          </TouchableOpacity>
                      </View>
                   </View>
                </View>
          </Animated.View>

          </View>
          </ImageBackground>
        </View>)
}


const styles = StyleSheet.create({
    locationForm :{
      flex:1, 
      backgroundColor:'rgba(255,255,255, 0.3)', 
      width:'100%', 
      alignItems:'center', 
      padding:20, 
      paddingBottom:40,
      borderRadius:60,
      gap:20
    },
    label: {
      fontFamily:'Roboto-Medium', 
      fontSize:16, 
      color:'#454545',
      fontWeight:'500',
    },
    input: {
      fontFamily:'Roboto', 
      fontSize:20, 
      color:'black',
      fontWeight:'700',
      flex:1,
      backgroundColor:'white',
      width:'100%',
      borderRadius:30,
      paddingLeft:20
    },
    button:{
      backgroundColor:'#000', 
      borderRadius:10, 
      paddingVertical:10,
      paddingHorizontal: 20,
      flexDirection:'row',
      alignItems:'center',
      gap:10
    },
    buttonText:{
      fontFamily:'Roboto-Black', 
      fontSize:20, 
      color:'white'
    }
})

export default CouponScreen