import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EStyleSheet  from "react-native-extended-stylesheet";
import MenuList from "../components/MenuList";
import Header from "../components/Header";

function Home({navigation}) {
    return (
        <SafeAreaView style={home.container}>
            <Header />

            <View style={{flex: 1}}>
                <MenuList navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
}

const home = EStyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16
    },
    header: {
        flexDirection: "row"
    },
    headerContainer: {
      flex: 1,
    },
    headerTitle: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 32,
        letterSpacing: -0.2,
        color: "$textColor"
    }
})

export default Home;