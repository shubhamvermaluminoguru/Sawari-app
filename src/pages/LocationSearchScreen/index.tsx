import React, { useEffect, useState} from "react";
import { View, Text, TouchableOpacity,  Image, PermissionsAndroid } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { useSharedValue, FadeInDown, FadeOut } from 'react-native-reanimated';
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Geolocation from '@react-native-community/geolocation';




const { width, height } = Dimensions.get('window');


const LocationSearch =(props :any)=>{
  console.log(props)
  const locationType = props.route.params.type
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [location , setLocation]= useState(useSelector((state:any)=>state.ride.from))
 
  useEffect(()=>{
    requestLocationPermissionAsync()
  },[])
  const handleLocationPress = (loc: any)=>{
      if(locationType==='from')
      {
        dispatch({type: 'SET_From', payload: loc});
      }else if(locationType==='to')
      {
        dispatch({type:'SET_TO', payload: loc})
        }
      navigation.goBack()
  }

  const requestLocationPermissionAsync = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Sawari: Location Permission',
          message:
            'Sawari App needs access to your location' +
            'So you can bokk ride faster',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.setRNConfiguration({
        'skipPermissionRequests':false,
        'authorizationLevel':'auto',
        'enableBackgroundLocationUpdates':true,
        locationProvider:'auto'

    })

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log('Current Position:', latitude, longitude);
        // Do something with latitude and longitude
      },
      error => {
        console.error('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

    return(
        <View style={styles.pageContainer}>
           <View style={{flexDirection:'row', gap:20, alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/fs-icons-ubuntu-by-franksouza-/512/back.png'}}
                  height={20} width={20}/>
            </TouchableOpacity>
           <Text style={styles.title}>Search Places</Text>
           </View>
               <GooglePlacesAutocomplete 
                  placeholder='Search for a location'
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                  }}
                  query={{
                    key: 'YOUR API KEY',
                    language: 'en',
                    components: 'country:in',
                  }}
                  currentLocation={true}
                  currentLocationLabel='Current location'
                  autoFillOnNotFound={true}
                  debounce={500}
                  enableHighAccuracyLocation={true}
                  enablePoweredByContainer={true}
                  styles={{
                    textInputContainer: {
                    },
                    textInput: {
                      backgroundColor:'white',
                      borderRadius:5,
                      paddingLeft:20,
                      fontFamily:'Roboto-Medium',
                      fontSize:16,
                      color:'#454545',
                    },
                  }}
                  textInputProps={{ placeholderTextColor: '#aaa' }}
                   
                />
           <Image source ={{uri:'https://pngimg.com/d/world_map_PNG28.png'}}  resizeMode={'contain'} height={500} width={width-40}/>
        </View>)
}


const styles = StyleSheet.create({
    pageContainer :{
      flex:1,  
      padding:20, 
      gap:10
    },
    title:{
      fontFamily:'Roboto-Bold',
      fontSize:23,
      color:'#454545'
    },
    searchInput:{
      backgroundColor:'white',
      borderRadius:5,
      paddingLeft:20,
      fontFamily:'Roboto-Medium',
      fontSize:16,
      color:'#454545'
    }
})

export default LocationSearch