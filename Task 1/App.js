/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import 'react-native-reanimated'
import styles from "./src/css/styles";
import HomeScreen from "./src/screens/home-screen";
import CoinDetailsScreens from "./src/screens/coin-details/coin-details-screens";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {persistStore} from "redux-persist";
import {configureStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App: () => Node = () => {
    // const isDarkMode = useColorScheme() === 'dark';
    const [screen, setScreen] = useState('home');
    const persistor = persistStore(configureStore());
    return (
        <Provider store={configureStore()}>
            <PersistGate loading={null} persistor={persistor}>
                <View style={[styles.mainPage.container]}>
                    <GestureHandlerRootView>
                        {screen === 'details' ? <CoinDetailsScreens changeScreen={setScreen}/> :
                            <HomeScreen changeScreen={setScreen}/>}
                        <StatusBar barStyle="default"/>
                    </GestureHandlerRootView>
                </View>
            </PersistGate>
        </Provider>
    );
};

export default App;
