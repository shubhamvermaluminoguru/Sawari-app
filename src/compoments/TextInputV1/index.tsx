import bottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    borderColor: string;
}

const TextInputV1 = (props :Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.placeholder}>{props.placeholder}</Text>
            <TextInput
                 placeholder={props.placeholder}
                style={[styles.input,{borderColor:props.borderColor}]}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholderTextColor={'#777'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        borderWidth: 1,
        width:'100%',
        borderBottomWidth: 1,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        fontFamily:'Roboto-Bold',
        fontSize:18,
        color:'#555',
    },
    placeholder:{
        color:'#555',
        width:'100%',
        textAlign:'left',
    }
});

export default TextInputV1;