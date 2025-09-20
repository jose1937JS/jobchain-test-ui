import { StyleSheet, Text, View, Image } from 'react-native'
import { theme } from '../styles/global'
import {CoinResponseObject} from '../types'

export default function RenderCoinItem({ name, current_price, image, symbol, ath_change_percentage }: CoinResponseObject) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image src={image} style={styles.image} />
                <View>
                    <Text style={styles.primaryText}>{name}</Text>
                    <Text style={styles.secundaryText}>{symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.atl_text, { 
                    color: ath_change_percentage! < 0 ? theme.red : theme.green, 
                }]}>{ath_change_percentage?.toFixed(2)}</Text>
            </View>
            <View>
                <Text style={styles.currentPriceText}>{current_price.toLocaleString()} $</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: theme.primary,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 15
    },
    primaryText: {
        color: theme.white,
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
    },
    secundaryText: {
        color: theme.textLight,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },
    atl_text: {
        fontSize: 16,

    },
    currentPriceText: {
        color: theme.white,
        fontSize: 20,
        fontFamily: 'Montserrat-Medium'
    }
})