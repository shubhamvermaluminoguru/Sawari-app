import React, { useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { useSharedValue, FadeInDown, FadeOutDown, withSpring } from 'react-native-reanimated';
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch } from 'react-redux';

import ProfileAndMenu from "../../compoments/ProfileAndMenu";
const { width, height } = Dimensions.get('window');


const RideTimeScreen =()=>{
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sheetHeight = useSharedValue(Math.floor(height*0.3));
  const sheetWidth = useSharedValue(Math.floor(width*0.8));
  
  const [time, setTime] = useState(useSelector((state:any)=>state.ride.time));
  const [date, setDate]= useState(useSelector((state:any)=>state.ride.date));
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [datePickerMode, setDatepickerMode]=useState('time');
  const [screenState, setScreenState]=useState('rideTimeSelect')


  const handleRideBtn = (type:string) => {
      //  dispatch({type: 'SET_COUPON', payload: coupon});
      if(type==='now'){
          dispatch({type: 'SET_TIME', payload: ''});
          dispatch({type:'SET_DATE', payload: ''});  
          setScreenState('rideTimeSelect')
          sheetHeight.value = withSpring( Math.floor(height*0.3), { damping: 20 });
          navigation.navigate('RideSelect' as never)
       }else if(type==='later'){
            sheetHeight.value = withSpring( Math.floor(height*0.6), { damping: 20 });
            setScreenState('rideLater') 
        }else if(type==='next'){
            dispatch({type: 'SET_TIME', payload: time});
            dispatch({type:'SET_DATE', payload: date});  
            setScreenState('rideTimeSelect')
            sheetHeight.value = withSpring( Math.floor(height*0.3), { damping: 20 });
            navigation.navigate('RideSelect' as never)
        }else if(type==='cancle'){
            sheetHeight.value = withSpring( Math.floor(height*0.3), { damping: 20 });
            setScreenState('rideTimeSelect')
        }
  }

  const showDateTimePicker=(mode: string, e:Event)=>{
     setDatepickerMode(mode)
     setIsDateTimePickerVisible(true)
     e.stopPropagation()
  }

  const setDateTime=( event: any, selectedDate:any )=>{
    if(datePickerMode==='date'){
      setDate(selectedDate.toLocaleDateString())
    }else if(datePickerMode==='time')
      {
        setTime(selectedDate.toLocaleTimeString())
      }
    setIsDateTimePickerVisible(false)
  }

  console.log(date, time)
    return(
        <View style={{flex:1, }}>
          <ProfileAndMenu/>
         <ImageBackground src={'https://camo.githubusercontent.com/2931b1e56daacb6c9a5c6cb8f751369385978b9d6ba9908bac2a4d5f7b6ef4fa/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67'} 
         style={{flex:1, alignItems:'center', backgroundColor:'black'}}
         resizeMode={'cover'}
         >
          <View style={{flex:1, backgroundColor:'rgba(150, 150, 150, 0.2)', width:'100%', 
          justifyContent:'center', alignItems:'center',
          padding:20, 
          }}>
          
          <Animated.View  style={{
                height:sheetHeight,
                width:sheetWidth, 
                borderRadius:20,
                marginTop:'auto'
              }}
              entering={FadeInDown}
              exiting={FadeOutDown}
              >
                <View 
                    style={{display:'flex', flex:1, justifyContent:'center', alignItems:'center'}} 
                        // blurType="light"
                        // blurAmount={1}
                        // blurRadius={2}
                        // reducedTransparencyFallbackColor="white"
                    >
               {screenState==='rideTimeSelect' && <View style={styles.locationForm}>
                      <TouchableOpacity style={styles.button} onPress={()=>handleRideBtn('later')}>
                          <Text style={styles.buttonText}>Ride Later</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={()=>handleRideBtn('now')}>
                          <Text style={styles.buttonText}>Ride Now</Text>
                      </TouchableOpacity>
                </View>}

                {screenState === 'rideLater' && <View style={styles.locationForm}>
                  <Text style={styles.label}>Start date</Text>
                  <TextInput style={styles.input} onPress={(e)=>{showDateTimePicker('date',e)}} showSoftInputOnFocus={false} value={date}></TextInput>
                  <Text style={styles.label}>Pickup Time</Text>
                  <TextInput style={styles.input} onPress={(e)=>{showDateTimePicker('time',e)}} showSoftInputOnFocus={false} value={time}></TextInput>
                  <TouchableOpacity style={styles.button} onPress={()=>handleRideBtn('now')}>
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>handleRideBtn('cancle')}>
                    <Text style={styles.buttonText}>Cancle</Text>
                  </TouchableOpacity>
                </View>
                }
                </View>
          </Animated.View>

          {isDateTimePickerVisible &&
            <DateTimePicker
                testID="dateTimePicker"
                value={new Date(1598051730000)}
                mode={datePickerMode}
                is24Hour={true}
                onChange={setDateTime}
              /> }

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
      padding:'10%', 
      borderRadius:60,
      gap:20,
      justifyContent:'center'
    },
    label: {
      fontFamily:'Roboto-Medium', 
      fontSize:16, 
      color:'#454545',
      fontWeight:'500',
      textAlign:'left',
      width:'95%'
    },
    input: {
      fontFamily:'Roboto', 
      fontSize:20, 
      color:'black',
      fontWeight:'700',
      backgroundColor:'white',
      width:'100%',
      borderRadius:15,
      paddingLeft:20,
      height: 60
    },
    button:{
      backgroundColor:'#000', 
      borderRadius:10, 
      paddingVertical:10,
      paddingHorizontal: 20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:10,
      height:50,
      width:'100%'
    },
    buttonText:{
      fontFamily:'Roboto-Black', 
      fontSize:16, 
      color:'white'
    }
})

export default RideTimeScreen