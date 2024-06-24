import React, {useEffect} from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated,{useSharedValue, withRepeat, withTiming, useAnimatedStyle} from "react-native-reanimated";
const { width, height } = Dimensions.get('window');

const AnimatedBg = (props: any) => {
   const offset = useSharedValue(height*0.8);
   const rotation = useSharedValue(0)

   const animationStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value},{rotate: `${rotation.value}deg`}],
    }));

    const animationStyle2 = useAnimatedStyle(() => ({
        transform: [{rotate: `${rotation.value}deg`}],
        }));

    useEffect(() => {
        offset.value = withRepeat(withTiming(height*0.6, { duration: 20750 }),-1,true);
        rotation.value = withRepeat(withTiming(-360, { duration: 40750 }),-1,true);
      }, []);

    return (
        <View style={[styles.pageContainer,{backgroundColor: props.backgroundColor}]}>
            <Animated.View style={[styles.animatedContainer1, animationStyle]} />
            <Animated.View style={[styles.animatedContainer2, animationStyle2]} />
        </View>
    )
}

const styles= StyleSheet.create({
    pageContainer:{
        flex:1, 
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'white'
    },
    animatedContainer1:{
        height:150,
        width:200,
        backgroundColor:'#ffef75',
        borderTopRightRadius: 200,
        borderBottomRightRadius:100,
        borderTopLeftRadius:200,
        borderBottomLeftRadius:100,
        transform:[{rotate:'45deg'}],
        position:'absolute',
        
       }, 
    animatedContainer2:{
        height:230,
        width:200,
        backgroundColor:'#ffef75',
        borderTopRightRadius: 300,
        borderBottomRightRadius:100,
        borderTopLeftRadius:200,
        borderBottomLeftRadius:300,
        transform:[{rotate:'45deg'}],
        position:'absolute',
        left:width-150,
        top:200
        
        }, 
})


export default AnimatedBg;