import * as React from "react";
import {View, FlatList} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { dataMenu } from "../data"
import MenuItem from "./MenuItem";

function MenuList({navigation}) {
    return (

        <FlatList
            style={listMenu.container}
            nestedScrollEnabled={true}
            data={dataMenu}
            renderItem={(itemData) => (
                <MenuItem
                    navigation={navigation}
                    id={itemData.item.id}
                    data={itemData.item}
                    style={EStyleSheet.child(itemMenu, 'container', itemData.item.id, dataMenu.length)}
                />
            )}
        />
    )
}

const listMenu = EStyleSheet.create({
    container: {
        flex: 1
    }
})

const itemMenu = EStyleSheet.create({
    container: {
        marginBottom: 16,
    },
    "container:last-child": {
        marginBottom: 0,
    }
});

export default MenuList;