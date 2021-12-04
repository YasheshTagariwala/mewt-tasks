import React, {useEffect, useState} from "react";
// import cryptoCurrencies from "../data/cryptocurrencies.json";
import CoinList from "../components/coin-list";
import {FlatList, View} from "react-native";
import {connect} from "react-redux";
import {getCoinsList} from "../redux/app/actions";
import Icon from "react-native-vector-icons/dist/FontAwesome";

function HomeScreen(props) {
    const [coinsList, setCoinsList] = useState([]);

    useEffect(() => {
        props.getCoinsList()
    }, []);

    useEffect(() => {
        setCoinsList(props.coins);
    }, [props.coins]);


    return (
        <>
            <View style={{justifyContent: "center", flexDirection: "row"}}>
                <Icon name="spinner" size={30} color={'white'} style={{
                    display: props.loading ? 'flex' : 'none',
                }}/>
            </View>
            <FlatList data={coinsList}
                      renderItem={({item}) => <CoinList coin={item} changeScreen={props.changeScreen}/>}/>
        </>
    );
}

const mapStateToProps = ({app}) => {
    const {coins, loading, error} = app
    return {coins, loading, error}
}

const mapActionsToProps = {getCoinsList}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(HomeScreen)
