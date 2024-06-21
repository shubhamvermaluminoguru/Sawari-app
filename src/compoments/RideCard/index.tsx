import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, {useSharedValue,} from "react-native-reanimated";
const RideCard =()=>{


    const showDetails =()=>{}

    return  <Animated.View style={styles.container}>
                <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/7641/7641727.png'}}
                      height={40} width={40} resizeMode="contain"
                    />
                    <View>
                        <Text style={styles.text}>India to India</Text>
                        <Text style={[styles.text,{color:'#999', fontSize:12}]}>2021-03-22 06:00:23</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#ddd', padding:5, paddingVertical:7, borderRadius:30, marginLeft:'auto'}}
                            onPress={showDetails}
                            >
                            <Image source={{uri:'https://cdn-icons-png.freepik.com/256/130/130882.png?semt=ais_hybrid'}} 
                            height={12} width={15} 
                            />
                            </TouchableOpacity>
                    <Image />
                </View>
                <Animated.View  style={{borderTopWidth:1, borderColor:'#eee', padding:5, 
                paddingVertical:10, marginTop:10, gap:10}}>
                    <View>
                        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp'}}
                         height={50} 
                         width={50} 
                         resizeMode="contain"
                         style={{borderRadius:70, backgroundColor:'#fff', borderWidth:2, borderColor:'#999'}}/>
                    </View>
                    <View>
                        <Text style={[styles.text]}>From</Text>
                        <Text style={[styles.text]}>Sector 71, Mohali, Punjab</Text>
                        <Text style={[styles.text, {marginTop:5}]}>To</Text>
                        <Text style={[styles.text]}>Bus Stand, Sector 17, Chandigarh</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                        <Text style={[styles.text]}>2.825 kms</Text>
                        <Text style={[styles.text, {fontSize:20}]}>$68</Text>
                    </View>
                </Animated.View>
           </Animated.View>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        elevation:3,
        width:'90%',
        marginHorizontal:'5%',
        marginVertical:'0.3%',
        padding:10
    },
    text:{
        fontFamily:'Roboto-Black',
        color:'#454545'
    }
  
})
export default RideCard