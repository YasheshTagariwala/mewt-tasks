import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/dist/AntDesign";
import EvlIcon from "react-native-vector-icons/dist/EvilIcons";
import styles from "../../../css/styles";

export default function CoinDetailsHeader(props) {
    const {
        image, name, symbol,
        marketCapRank, changeScreen
    } = props;
    return (
        <View style={styles.coinDetails.headerContainer}>
            <TouchableOpacity onPress={() => changeScreen('home')}>
                <Icon name="left" size={30} color="white"/>
            </TouchableOpacity>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                <Image source={{uri: image}} style={{width: 25, height: 25}}/>
                <Text
                    style={styles.coinDetails.title}>{symbol.toUpperCase()}</Text>
                <Text style={[{fontSize: 15}, styles.coinList.rank]}>#{marketCapRank}</Text>
            </View>
            <EvlIcon name="user" size={30} color="white"/>
        </View>
    );
}
