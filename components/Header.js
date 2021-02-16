import * as React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import EStyleSheet  from "react-native-extended-stylesheet";
import FeedbackButton from "../components/FeedbackButton";
import SettingButton from "../components/SettingButton";
import ModalBlock from "./ModalBlock";

function Header() {
    const [loaded] = useFonts({
        MulishBold: require('../assets/fonts/Mulish-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <View style={header.headerContainer}>
                <Text style={header.headerTitle}>Mobile App Name</Text>
                <SettingButton />
            </View>

            <View style={header.feedbackButton}>
                <FeedbackButton />
            </View>
        </View>
    );
}

const header = EStyleSheet.create({
    headerContainer: {
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    headerTitle: {
        flexGrow: 1,
        fontFamily: "MulishBold",
        fontSize: 26,
        lineHeight: 32,
        letterSpacing: -0.2,
        color: "$textColor"
    },
    feedbackButton: {
        marginBottom: 16
    }

})

export default Header;