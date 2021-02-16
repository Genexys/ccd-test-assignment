import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from "react-native";
import {useFonts} from "expo-font";
import EStyleSheet from 'react-native-extended-stylesheet';

function MenuItem({data, navigation}) {
    const [loaded] = useFonts({
        MulishBold: require('../assets/fonts/Mulish-Bold.ttf'),
        MulishRegular: require('../assets/fonts/Mulish-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[item.container, {backgroundColor: data.color}]}
            onPress={() => navigation.navigate(data.name.charAt(0).toUpperCase() + data.name.slice(1))}>
            <View style={item.wrapper}>
                <View>
                    <Text style={item.title}>
                        {data.name}
                    </Text>
                    <Text style={item.description}>
                        {data.description}
                    </Text>
                </View>
                <Image source={data.img}/>
            </View>
        </TouchableOpacity>
    )
}

const item = EStyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        height: 88,
        width: "100%",
        marginBottom: 16,
        paddingHorizontal: 20,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,

        elevation: 1,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        marginBottom: 4,
        fontFamily: "MulishBold",
        // fontWeight: "bold",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.1,
        color: "$textColor"
    },
    description: {
        fontFamily: "MulishRegular",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: -0.1,
        color: "#68727F"
    }
})

export default MenuItem;