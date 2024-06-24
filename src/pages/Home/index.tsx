import React, { useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import ProfileAndMenu from "../../compoments/ProfileAndMenu";
import { useThemeContext } from "../../../App";

const { width, height } = Dimensions.get('window');



const HomeScreen =()=>{
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {theme} = useThemeContext();
  const sheetHeight = useSharedValue(Math.floor(height*0.1));
  const sheetWidth = useSharedValue(Math.floor(width*0.8));

  const from = useSelector((state: any) => state.ride.from);
  const to = useSelector((state: any) => state.ride.to);

  const [locationSelectorType , setLocationSelectorType] = useState('from');

  const [bottomSheetState, setBottomSheetState] = useState('close');
  const handlePress = (state: string) => {
    if(state === 'close'){
      sheetHeight.value = withSpring( Math.floor(height*0.1), { damping: 20 });
      sheetWidth.value = withSpring( Math.floor(width*0.7), { damping: 20 });
    }else if(state === 'locationForm'){
      sheetHeight.value = withSpring( Math.floor(height*0.6), { damping: 20 });
      sheetWidth.value = withSpring( Math.floor(width*0.9), { damping: 20 });
    }else if(state === 'chooseLocation'){
      sheetHeight.value = withSpring( Math.floor(height*0.15), { damping: 20 });
      sheetWidth.value = withSpring( Math.floor(width*0.7), { damping: 20 });
    }else if(state === 'chooseRide'){
      dispatch({type: 'SET_DISTANCE', payload: 10});
      navigation.navigate('RideSelect' as never)
      state ='locationForm'
    }else if(state === 'chooseRideTime'){
      dispatch({type: 'SET_DISTANCE', payload: 10});
      state ='locationForm'
      navigation.navigate('RideTimeScreen' as never)
    }

    setBottomSheetState(state);
  };

  const handleLocationSelect = (type: string) => {
    setLocationSelectorType(type);
    handlePress('chooseLocation');
  };

  const handleLocation=(location:string) => {
    if(locationSelectorType === 'from'){
      dispatch({type: 'SET_FROM', payload: "Sector 43, Chandigarh"});
    }else if(locationSelectorType === 'to'){
      dispatch({type: 'SET_TO', payload: "Sector 17, Chandigarh"});
    }
    handlePress('locationForm');
  }

  const handleLocationSearch=(type:string)=>{
      setLocationSelectorType(type)
      navigation.navigate('LocationSearch' as never, {type: type} )
  }




const styles = StyleSheet.create({
  locationForm :{
    flex:1, 
    backgroundColor:theme.transparentColor, 
    width:'100%', 
    justifyContent:'space-around', 
    alignItems:'center', 
    padding:'8%', 
    borderRadius:60},
  inputContainer: {
    backgroundColor:theme.primary, 
    height:'25%', 
    width:'100%', 
    borderRadius:40,
    paddingLeft: 20,
    paddingTop:20
  },
  label: {
    fontFamily:'Roboto-Medium', 
    fontSize:16, 
    color:theme.textClr2,
    fontWeight:'500',
  },
  input: {
    fontFamily:'Roboto', 
    fontSize:20, 
    color:theme.textClr3,
    fontWeight:'700',
    flex:1,
  },
  button:{
    backgroundColor:theme.yellow, 
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
  }
})


    return(
        <View style={{flex:1, }}>
         <ProfileAndMenu/>
         <ImageBackground src={theme.mapBg} 
         style={{flex:1, alignItems:'center'}}
         resizeMode={'cover'}
         >
          <View style={{flex:1, backgroundColor:'rgba(150, 150, 150, 0.2)', width:'100%', 
          justifyContent:'center', alignItems:'center',
          padding:'15%', zIndex:2
          }}>
          
          <Animated.View  style={{
                height:sheetHeight,
                width:sheetWidth, 
                marginTop:'auto',
                borderRadius:20,
                
              }}>
                
         <View 
            style={{display:'flex', flex:1, justifyContent:'center', alignItems:'center', elevation:-1}} 
                // blurType="light"
                // blurAmount={1}
                // blurRadius={2}
                // reducedTransparencyFallbackColor="white"
                // overlayColor='transpanrent'
            >

           {bottomSheetState ==='close'&& <TouchableOpacity style={{
                flex: 1,
                width:'90%',
                borderRadius:20, 
                  overflow:'hidden',
                backgroundColor: theme.transparentColor, 
              justifyContent:'center', alignItems:'center', display:'flex' 
            }}
              onPress={()=>handlePress('locationForm')}>
              <Text style={{fontSize:20, color:theme.textClr3, fontWeight:700, fontFamily:'Roboto-Black'}}>Where to?</Text>
            
          </TouchableOpacity>}

          {bottomSheetState ==='locationForm'&& 
           <View style={styles.locationForm}>
              <Text style={{fontSize:20, color:theme.textClr3, fontWeight:700, fontFamily:'Roboto-Black', }}>Where to?</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label} >From</Text>
                <View style={{flex:1, flexDirection:'row', alignItems:'center', paddingEnd:10}}>
                  <TextInput style={styles.input} placeholder="Current Location" placeholderTextColor={'#959595'} value={from} onPress={()=>handleLocationSearch('from')}></TextInput>
                  <TouchableOpacity onPress={()=>handleLocationSelect('from')}>
                  <Image source={{uri: 'https://i.pinimg.com/originals/0d/6f/59/0d6f592f17e2acd9770a065466b37bfa.png'}}
                      style={{width: 40, height: 40}}
                    />
                    </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>To</Text>
                <View style={{flex:1, flexDirection:'row', alignItems:'center', paddingEnd:10}}>
                    <TextInput style={styles.input} placeholder="Destination Location" placeholderTextColor={'#959595'} value={to} onPress={()=>handleLocationSearch('to')}></TextInput>
                  <TouchableOpacity onPress={()=>handleLocationSelect('to')}>
                  <Image source={{uri: 'https://i.pinimg.com/originals/0d/6f/59/0d6f592f17e2acd9770a065466b37bfa.png'}}
                      style={{width: 40, height: 40}}
                    />
                    </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>handlePress('chooseRideTime')}>
                <Text style={styles.buttonText}>Let's do</Text>
                <Image source={{uri: 'https://purepng.com/public/uploads/large/purepng.com-renault-megane-rs-trophy-white-carcarvehicletransportrenault-961524636383kwsph.png'}}
                      style={{width: 40, height: 20}}/>
              </TouchableOpacity>
           </View>
          }

          {bottomSheetState==='chooseLocation' && 
           <View style={{...styles.locationForm} }>
           <Text style={{fontSize:20, color:theme.textClr3, fontWeight:700, fontFamily:'Roboto-Black', }}>Choose Location?</Text>
            <TouchableOpacity onPress={()=>handleLocation('this is a location')}>
                  <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/011/356/701/non_2x/3d-render-yellow-arrow-pointer-png.png'}} 
                      style={{width: 40, height: 40}}/>
              </TouchableOpacity> 
            </View>}


          </View>


          </Animated.View>

          </View>
          {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}

            style={{flex: 1, position:'absolute', top:0, left:0, height:height, width:width, zIndex:0}}
          /> */}
          </ImageBackground>
        </View>)
}

export default HomeScreen