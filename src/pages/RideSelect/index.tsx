import React, { useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Image, ImageBackgroundComponent } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import ProfileAndMenu from "../../compoments/ProfileAndMenu";
const { width, height } = Dimensions.get('window');

const data = [{
    type: 'SUV',
    rate: 20,
    brands: ['Tata', 'Mahindra', 'Ford', 'Toyota', 'Hyundai'],
    image: 'https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-suv-jeep-vector-png-image_6368448.png'
},
{
    type: 'Hatchback',
    rate: 10,
    brands: ['Hyundai', 'Mahindra', 'Tata', 'Maruti Suzuki'],
    image: 'https://www.financialexpress.com/wp-content/uploads/2022/05/back.png'
},  
{
    type: 'Sedan',
    rate: 15,
    brands: ['Skoda', 'Toyota', 'VW', 'Hyndai'],
    image: 'https://www.pngall.com/wp-content/uploads/2/Sedan-Car-PNG-File-Download-Free.png'
},
{
    type: 'Luxury',
    rate: 25,
    brands: ['Mercedes', 'Audi', 'BMW', 'Volvo'],
    image: 'https://pngimg.com/d/mercedes_PNG80189.png'
},
]


interface RideData {
    type: string;
    rate: number;
    brands: string[];
    image: string;
}
const RideSelectScreen =()=>{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleRideSelect = (ride: RideData) => {
      dispatch({type: 'SET_TYPE', payload: ride.type});
      dispatch({type: 'SET_PRICE', payload: ride.rate});
      navigation.navigate('CouponScreen' as never)
    }

    return(
        <View style={{flex:1, }}>
          <ProfileAndMenu/>
         <ImageBackground src={'https://camo.githubusercontent.com/2931b1e56daacb6c9a5c6cb8f751369385978b9d6ba9908bac2a4d5f7b6ef4fa/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67'} 
         style={{flex:1, alignItems:'center', backgroundColor:'black'}}
         resizeMode={'cover'}
         >
            <Carousel
                width={width}
                mode={'parallax'}
                height={height*0.9}
                autoPlay={false}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                <View style={styles.card} >
                    {/* <BlurView 
                        blurType="light"
                        blurAmount={1}
                        blurRadius={2}
                        // enabled={false}
                        // reducedTransparencyFallbackColor="white"
                        overlayColor="red"
                        style={{flexDirection:'column', alignItems:'center', justifyContent:'space-around', width:'100%', height:'100%'}}
                    > */}
                        <Text style={{fontSize:28, color:'#454545', fontWeight:700, fontFamily:'Roboto-Black', }}>{item.type}</Text>
                        <View style={{width:'95%', height:'40%', borderRadius:20, overflow:'visible'}}>
                            <View style={{width:'100%', height:'100%', backgroundColor:'#ffbb00', borderRadius:20, overflow:'visible'}}>
                            </View>
                            <Image source={{uri:item.image}} 
                                    style={{position:'absolute', top:0, left:10,
                                        transform: [{translateY: 50}], 
                                        width: '105%',
                                        height: undefined,
                                        aspectRatio: 16/9,}}/>
                        </View>
                        <View style={{gap:30}}>
                            <Text style={{fontSize:20, color:'#454545',fontFamily:'Roboto-Black', }}>Rs. {item.rate}/ Km</Text>
                           <View style={{flexDirection:'row', alignItems:'center', flexWrap:'wrap', gap:20}}>
                            {item.brands.map((brand, index)=>{
                                return <Text key={index} style={{fontSize:16, color:'#454545',fontFamily:'Roboto-Black', paddingHorizontal:25, paddingVertical:10, backgroundColor:'#ffa', borderRadius:5}}>{brand}</Text>
                            })}
                           </View>
                        </View>
                        <TouchableOpacity style={{...styles.button, backgroundColor:'black'}} onPress={()=>handleRideSelect(item)}>
                            <Text style={{...styles.buttonText, color:'white'}}>Select</Text>
                            </TouchableOpacity> 
                  {/* </BlurView> */}
                </View>
            )}

            style={{marginTop:'auto'}}
            />

          </ImageBackground>
        </View>)
}


const styles = StyleSheet.create({
    locationForm :{
      flex:1, 
      backgroundColor:'rgba(255,255,255, 0.3)', 
      width:'100%', 
      justifyContent:'space-around', 
      alignItems:'center', 
      padding:20, 
      borderRadius:60},
    inputContainer: {
      backgroundColor:'white', 
      height:'25%', 
      width:'100%', 
      borderRadius:40,
      paddingLeft: 20,
      paddingTop:20
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
    },
    button:{
      backgroundColor:'#ffbb00', 
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
      color:'black'
    },
    card:{
        flex: 1, 
        backgroundColor:"rgba(255,255, 255, 0.8)", 
        width:'100%', 
        padding: 30, 
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        gap:40
    }
})

export default RideSelectScreen




