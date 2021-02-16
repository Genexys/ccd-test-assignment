import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Training({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Training</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Training;