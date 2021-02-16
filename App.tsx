import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import Statistics from './screens/Statistics';
import Checklist from './screens/Checklist';
import Training from './screens/Training';
import Questions from './screens/Questions';
import Exam from './screens/Exam';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

EStyleSheet.build({
    $textColor: "#354354"
});

export default function App() {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            // background: "#CCCCCC",
        },
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Statistik" component={Statistics}/>
                    <Stack.Screen name="Checkliste" component={Checklist}/>
                    <Stack.Screen name="Training" component={Training}/>
                    <Stack.Screen name="Fragenliste" component={Questions}/>
                    <Stack.Screen name="Prufung" component={Exam}/>
                    <Stack.Screen name="Settings" component={Settings}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}