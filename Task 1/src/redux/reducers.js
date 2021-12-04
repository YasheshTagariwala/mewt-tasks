import {persistCombineReducers} from 'redux-persist';
import AppReducer from './app/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = persistCombineReducers(
    {
        key: 'crypto-demo',
        storage: AsyncStorage,
    },
    {
        app: AppReducer,
    },
);

export default reducers;
