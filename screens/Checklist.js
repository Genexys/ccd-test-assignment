import * as React from 'react';
import {View, Text, Button} from 'react-native';


function Checklist({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>Checkliste</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Checklist;