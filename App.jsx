import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store";
import HomeScreen from './src/screens/home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from "./src/screens/map"
import EatsScreen from "./src/screens/eat"



const Stack = createStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name={'HomeScreen'}
                            component={HomeScreen}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name={'MapScreen'}
                            component={MapScreen}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name={'EatsScreen'}
                            component={EatsScreen}
                            options={{
                                headerShown: false
                            }}
                        />
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
