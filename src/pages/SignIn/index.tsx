import { useState } from "react"
import { View, Text, TextInput} from "react-native"
import { useTheme } from '@react-navigation/native';
const SignIn = ()=>{
    const colors = useTheme().colors;

    return(
    <View style={{}}>
        <View>
            <Text style={{color:colors.primary}}>Welcome to</Text>
            <Text >Sawari!</Text>
        </View> 

        <View>
                <TextInput
                    value=""
                    placeholder="Mobile no"
                />
        </View> 
    </View>)
}

export default SignIn;