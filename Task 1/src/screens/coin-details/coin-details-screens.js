import React, {useEffect, useState} from "react";
import {Text, View, Dimensions, TextInput, Button, TouchableOpacity} from "react-native";
import coinDetails from '../../data/crypto.json';
import CoinDetailsHeader from "./components/coin-details-header";
import {Colors} from "react-native/Libraries/NewAppScreen";
import styles from "../../css/styles";
import Icon from "react-native-vector-icons/dist/AntDesign";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';

const screenWidth = Dimensions.get('window').width;

export default function CoinDetailsScreens({changeScreen}) {
    const {
        image: {small}, name, symbol,
        market_data: {market_cap_rank, current_price, price_change_percentage_24h},
        prices
    } = coinDetails;

    const [currentCoins, setCoins] = useState('1');
    const [currentPrice, setCurrentPrice] = useState(current_price.usd.toString());

    useEffect(() => {
        setCoins(currentCoins);
        setCurrentPrice((+(currentCoins || 0) * current_price.usd).toString());
    }, [currentCoins]);

    useEffect(() => {
        setCurrentPrice(currentPrice);
        setCoins((+(currentPrice || 0) / current_price.usd).toString());
    }, [currentPrice]);

    const percentColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
    const chartColor = current_price.usd > prices[0][1] ? '#16c784' : '#ea3943';

    const formatCurrency = (value) => {
        "worklet";
        if (!value) {
            return `$${current_price.usd.toFixed(2)}`;
        }
        return `$${parseFloat(value).toFixed(2)}`
    }
    return (
        <View style={{paddingHorizontal: 10}}>
            <ChartPathProvider data={{
                points: prices.map(([x, y]) => ({x, y})), smoothingStrategy: 'bezier'
            }}>
                <CoinDetailsHeader
                    image={small} name={name}
                    symbol={symbol} changeScreen={changeScreen}
                    marketCapRank={market_cap_rank}/>
                <View style={styles.coinDetails.priceContainer}>
                    <View>
                        <Text style={{color: Colors.white, fontSize: 15}}>{name}</Text>
                        <ChartYLabel format={formatCurrency} style={{
                            color: Colors.white,
                            fontSize: 30,
                            fontWeight: "600",
                            letterSpacing: 1
                        }}/>
                    </View>
                    <View style={{
                        backgroundColor: percentColor,
                        padding: 5,
                        borderRadius: 5,
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                    }}>
                        <Icon name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} size={12}
                              color={'white'}
                              style={{alignSelf: 'center', marginRight: 5}}/>
                        <Text style={{color: Colors.white, fontSize: 18, fontWeight: '500'}}>
                            {price_change_percentage_24h.toFixed(2)}%
                        </Text>
                    </View>
                </View>
                <View>
                    <ChartPath strokeWidth={2} height={screenWidth / 2} stroke={chartColor} width={screenWidth}/>
                    <ChartDot style={{backgroundColor: chartColor}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Text style={{color: Colors.white, alignSelf: 'center'}}>{symbol.toUpperCase()}</Text>
                        <TextInput style={styles.coinDetails.input} value={currentCoins}
                                   onChangeText={(e) => setCoins(e)}
                                   keyboardType="numeric"/>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Text style={{color: Colors.white, alignSelf: 'center'}}>USD</Text>
                        <TextInput value={currentPrice} keyboardType="numeric"
                                   onChangeText={(e) => setCurrentPrice(e)}
                                   style={styles.coinDetails.input}/>
                    </View>
                </View>
                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        backgroundColor: '#DDDDDD',
                        padding: 10,
                        width: 200,
                        borderRadius: 20
                    }}>
                        <Text style={{fontSize: 20, color: Colors.black}}>Buy</Text>
                    </TouchableOpacity>
                </View>
            </ChartPathProvider>
        </View>
    );
}
