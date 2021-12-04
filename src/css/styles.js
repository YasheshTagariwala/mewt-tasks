import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    mainPage: {
        container: {
            flex: 1,
            backgroundColor: '#121212',
            // paddingTop: 50
        },
    },
    coinList: {
        title: {
            color: Colors.white,
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 2
        },
        text: {
            color: Colors.white,
            marginRight: 5
        },
        coinContainer: {
            flexDirection: 'row',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#282828',
            padding: 15
        },
        rank: {
            fontWeight: 'bold',
            backgroundColor: '#585858',
            paddingHorizontal: 5,
            borderRadius: 5,
            color: Colors.white
        }
    },
    coinDetails: {
        headerContainer: {
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        title: {color: Colors.white, fontWeight: "bold", marginHorizontal: 5, fontSize: 17},
        priceContainer: {padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
        input: {
            flex: 1,
            height: 40,
            margin: 12,
            borderBottomWidth: 1,
            borderBottomColor: Colors.white,
            padding: 10,
            fontSize: 16,
            color: Colors.white
        }
    },
});

export default styles
