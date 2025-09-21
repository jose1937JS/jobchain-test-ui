import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import { theme } from '../styles/global'
import Input from './Input'
import Octicons from '@expo/vector-icons/Octicons';
import Badge from './Badge';
import { getCoins } from '../api/Wallet';
import { BadgeItem, CoinResponse } from '../types'
import RenderCoinItem from './RenderCoinItem';

export default function Wallet() {
    const [coins, setCoins] = useState<CoinResponse>([]);
    const [badges, setBadges] = useState([
        {
            id: 1,
            title: "Todo",
            isPressed: true
        },
        {
            id: 2,
            title: "Criptomonedas",
            isPressed: false
        },
        {
            id: 3,
            title: "Tarjetas",
            isPressed: false
        },
        {
            id: 4,
            title: "Fiat",
            isPressed: false
        }
    ])

    const getData = async () => {
        const data = await getCoins({ vs_currency: 'usd', per_page: 50 })
        setCoins(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const onPress = (selectedItem: BadgeItem) => {
        const updatedBadges = badges.map((badge) => {
            return {
                ...badge,
                isPressed: badge.id === selectedItem.id
            }
        })
        setBadges(updatedBadges)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input containerStyle={styles.input} />
                <Octicons style={styles.icon} name="arrow-switch" size={40} color={theme.textLight} />
            </View>
            <View style={styles.badgeContainer}>
                <ScrollView horizontal>
                    { badges.map((item) => (
                        <Badge 
                            style={[styles.badge, { backgroundColor: item.isPressed ? theme.primary : theme.black }]} 
                            key={item.id} 
                            title={item.title} 
                            onPress={() => onPress(item)} 
                        />
                    ))}
                </ScrollView>
            </View>
            
            <FlatList
                data={coins}
                keyExtractor={(item, index) => item.id || index.toString()}
                renderItem={({ item }) => {
                    const { name, current_price, image, symbol, ath_change_percentage } = item
                    return (
                        <RenderCoinItem 
                            name={name} 
                            current_price={current_price}
                            image={image}
                            symbol={symbol}
                            ath_change_percentage={ath_change_percentage}
                        />
                    )
                }}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: theme.white
    },
    inputContainer: {
        flexDirection: 'row',
    },
    icon: {
        transform: 'rotate(90deg)'
    },
    input: {
        width: '87%',
        marginRight: 10,
    },
    badgeContainer: {
        flexDirection: 'row',
        marginVertical: 20
    },
    badge: {
        marginRight: 15
    }
})