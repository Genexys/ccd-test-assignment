import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet  from "react-native-extended-stylesheet";
import Gear from '../Icons/Gear';

function SettingButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={.8} style={button.container} onPress={() => navigation.navigate("Settings")}>
            <Gear width={17} height={18}/>
        </TouchableOpacity>
    );
}

const button = EStyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 44,
        borderRadius: 22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        backgroundColor: "#ffffff",
    },

})

export default SettingButton;