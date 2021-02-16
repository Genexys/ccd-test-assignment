import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {useFonts} from "expo-font";
import EStyleSheet  from "react-native-extended-stylesheet";

function FeedbackButton() {
    const [loaded] = useFonts({
        MulishRegular: require('../assets/fonts/Mulish-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={button.container}
        >
            <Text style={button.text}>Support and feedback</Text>
        </TouchableOpacity>
    );
}

const button = EStyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 42,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor: "#ffffff",
    },
    text: {
        fontFamily: "MulishRegular",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        letterSpacing: -0.1,
        color: "$textColor"
    }
});

export default FeedbackButton;