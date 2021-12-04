import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/dist/AntDesign";
import styles from "../css/styles";
import {Colors} from "react-native/Libraries/NewAppScreen";

const CoinList = ({coin, changeScreen}) => {
    let {image, name, current_price, market_cap_rank, symbol, price_change_percentage_24h, market_cap} = coin;

    const marketCapCalc = (marketCap) => {
        if (marketCap < 1e3) return marketCap;
        if (marketCap >= 1e3 && marketCap < 1e6) return +(marketCap / 1e3).toFixed(3) + " K";
        if (marketCap >= 1e6 && marketCap < 1e9) return +(marketCap / 1e6).toFixed(3) + " M";
        if (marketCap >= 1e9 && marketCap < 1e12) return +(marketCap / 1e9).toFixed(3) + " B";
        if (marketCap >= 1e12) return +(marketCap / 1e12).toFixed(3) + " T";
    };

    const percentColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

    return (
        <TouchableOpacity onPress={() => changeScreen('details')}>
            <View style={styles.coinList.coinContainer}>
                <Image source={{uri: image}}
                       style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}}/>
                <View>
                    <Text style={styles.coinList.title}>{name}</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={[styles.coinList.text, styles.coinList.rank]}>{market_cap_rank}</Text>
                        <Text style={styles.coinList.text}>{symbol.toUpperCase()}</Text>
                        <Icon name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} size={12}
                              color={percentColor}
                              style={{alignSelf: 'center', marginRight: 5}}/>
                        <Text style={{color: percentColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
                    </View>
                </View>
                <View style={{marginLeft: 'auto', alignItems: "flex-end"}}>
                    <Text style={styles.coinList.title}>{current_price}</Text>
                    <Text style={{color: Colors.white}}>MCap {marketCapCalc(market_cap)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CoinList;
