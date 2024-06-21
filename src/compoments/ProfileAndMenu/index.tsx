import React,{useState, useEffect } from "react";
import { Image, View, Text, StyleSheet, StatusBar, BackHandler } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
  } from 'react-native-navigation-bar-color';

import { Dimensions } from "react-native";
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const menuData = [
    {
        icon: 'https://cdn-icons-png.freepik.com/512/8367/8367621.png',
        text:'Home',
        location: 'Home',
    },
    {
        icon: 'https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg',
        text:'Your Profile',
        location: 'ProfileScreen',
    },
    {
        icon: 'https://icones.pro/wp-content/uploads/2022/03/historique-icone-de-l-historique-gris.png',
        text:'Ride History',
        location: 'RideHistory',
    },
    {
        icon: 'https://cdn-icons-png.freepik.com/512/7828/7828834.png',
        text:'Upcoming Rides',
        location: 'UpcomingRidesScreen',
    },
    {
        icon: 'https://cdn-icons-png.freepik.com/512/8372/8372010.png',
        text:'Add Money',
        location: 'ProfileScreen',
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/2878/2878547.png',
        text:'My Transactions',
        location: 'ProfileScreen',
    },
    {
        icon: 'https://cdn-icons-png.freepik.com/512/2893/2893421.png',
        text:'Themes',
        location: 'ThemesScreen',
    },
    {
        icon: 'https://cdn-icons-png.freepik.com/512/2893/2893421.png',
        text:'Languages',
        location: 'LaguageScreen',
    },

]
const ProfileAndMenu = () => {
    const navigation = useNavigation();
    const width = useSharedValue(0);
    const height = useSharedValue(screenHeight);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    
    const openDrawer = () => {
        width.value = withSpring(screenWidth, { damping: 20 })
        setIsDrawerOpen(!isDrawerOpen)
        changeNavigationBarColor('transparent')
    }
    const closeDrawer = () => {
        width.value = withSpring(0, { damping: 20 })
        setIsDrawerOpen(false)
        changeNavigationBarColor('transparent')
    }
    const handleNavigate=(screen:string)=>{
        closeDrawer()
        navigation.navigate(screen as never)
    }
    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
               if(isDrawerOpen){
                closeDrawer()
                return true
               }else{
                closeDrawer()
                return false
               }
          };
      
          BackHandler.addEventListener(
            'hardwareBackPress', onBackPress
          );
      
          return () =>
            BackHandler.removeEventListener(
              'hardwareBackPress', onBackPress
            );
        }, [isDrawerOpen])
      );

    useEffect(()=>{
        changeNavigationBarColor('transparent')
    },[])
    

    return (
        <View style={{position:'absolute', width:'100%',  flexDirection:'row', zIndex:10, gap:10, 
        }}>
            <Animated.View style={[styles.sideDrawer,{width: width, height:height}]}>
            {isDrawerOpen && <StatusBar barStyle={'dark-content'} backgroundColor={'#ffef75'} />}
                {/* <View style={{backgroundColor:'#fff', height:'100%', width:'50%', gap:10}}> */}
                    <TouchableOpacity style={styles.closeButton} onPress={()=>closeDrawer()}>
                        <Text>X</Text>
                    </TouchableOpacity>
                    <View style={[styles.sectionContainer, {flexDirection:'row'}]}>
                        <View style={{flex:1, justifyContent:'center', paddingLeft:'5%', overflow:'hidden'}}>
                            <Text style={styles.textBold} numberOfLines={1} >John Wick</Text>
                            <Text style={[styles.textBold,{fontFamily:'roboto-bold', fontWeight:700, fontSize:15}]} numberOfLines={1} >+91 8278864225</Text>
                        </View>
                        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp'}}
                                height={90} 
                                width={90} 
                                resizeMode="contain"
                                style={{borderRadius:70, backgroundColor:'#ffef75'}}
                                />
                    </View>
                    <View style={[styles.sectionContainer, {padding:'7%', flexGrow:1, justifyContent:'space-between', marginBottom:40}]}>
                         {menuData.map((item, index)=>{
                             return <TouchableOpacity style={styles.menuOption}  key={index}
                                            onPress={()=>handleNavigate(item.location)}>
                                        <Image source={{uri:item.icon}} height={20} width={20} resizeMode="contain"/>
                             <Text style={styles.textBold} numberOfLines={1}  >{item.text}</Text>
                         </TouchableOpacity>
                         })}   
                            
                            
                    </View>
                   
                {/* </View> */}
                {/* <View style={{height:'100%', width:'50%',backgroundColor:'rgba(0,0,0,0.7)', flexGrow:1}}>
                    <TouchableOpacity onPress={toggelDrawer} style={{ height:'100%', width:'100%',
                    }}></TouchableOpacity>
                </View> */}
            </Animated.View>


            <View style={{flexDirection:'row', gap:10, flex:1, justifyContent:'space-between', marginTop:'5%', paddingHorizontal:'3%'}}>
            <Animated.View sharedTransitionTag="menuBurger">
            <TouchableOpacity style={{padding:5, backgroundColor:'white', borderRadius:30, height:30, elevation:10, marginTop:15}}
              onPress={openDrawer}
            >
                <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png'}} height={20} width={20}></Image>
            </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen' as never)} style={{marginStart:'auto'}}>
                <Animated.Image 
                source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp'}} 
                height={60} 
                width={60} 
                resizeMode="contain"
                sharedTransitionTag="profilePic"
                style={{borderRadius:70, borderColor:'black', borderWidth:1, backgroundColor:'white'}}
                />
            </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles=StyleSheet.create({
    sideDrawer:{
        position:'absolute',
        top:0,
        left:0,
        height:screenHeight,
        backgroundColor:'#ffef75',
        flexDirection:'column',
        zIndex:100,
        overflow:'hidden',
        gap:20,
        paddingTop:'10%',
        paddingBottom:'5%'
    },
    menuOption:{
        backgroundColor:'#e8e8e8',
        flexGrow:1,
        height:'10%',
        alignItems:'center',
        paddingLeft:'5%',
        borderRadius:20,
        flexDirection:'row',
        gap:10
    },
    closeButton:{
        backgroundColor:'#ff672e',
        borderRadius:30,
        width: 40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'auto',
        marginRight:'5%'

    },
    sectionContainer:{
        marginHorizontal:'5%',
        backgroundColor:'#fff',
        padding:'3%',
        borderRadius: 40,
        overflow:'hidden',
    },
    textBold:{
        fontFamily:'Roboto-Black',
        color:'#454545',
        fontSize:14

    }
})

export default ProfileAndMenu


// #ff672e

//#ffdf88
//#e8e8e8