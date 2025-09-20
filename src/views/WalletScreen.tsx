import React, { useState, useRef } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import type * as ReactNative from 'react-native';
import { Feather } from '@expo/vector-icons'
import { theme } from '../styles/global'
import PagerView from 'react-native-pager-view';
import Wallet from '../components/Wallet'
import {PageSelectedEvent} from '../types'

export default function WalletScreen() {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [page, setPage] = useState(1);
    const pagerViewRef = useRef<PagerView>(null);

    const onPageSelected = (e: ReactNative.NativeSyntheticEvent<PageSelectedEvent>) => {
        setPage(e.nativeEvent.position)
    }

    return (
        <View style={styles.container}>
            <View style={styles.moneyContainer}>
                <Text style={styles.textMoney}>{isVisible ? '1.240,49 €' : '**********'}</Text>
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setIsVisible(!isVisible)}
                >
                    {isVisible ?
                        <Feather name="eye-off" size={24} color="white" /> :
                        <Feather name="eye" size={24} color="white" />
                    }
                </TouchableOpacity>
            </View>
            <View style={[styles.moneyContainer, { marginTop: 10 }]}>
                <Text style={styles.subText}>
                    +800 €
                    <Text style={{ color: '#6f6d8fff' }}> | </Text>
                    <Text style={styles.green}>+2.3%</Text>
                </Text>
            </View>
            <Image source={require('../../assets/line-removebg-preview.png')} style={styles.image} />

            <View style={styles.tabOptionsContainer}>
                <TouchableOpacity onPress={() => pagerViewRef?.current?.setPage(0)}>
                    <Text style={styles.tabOptionText}>Mi Cartera</Text>
                    { page === 0 && <View style={styles.optionBottomBorder}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pagerViewRef?.current?.setPage(1)}>
                    <Text style={styles.tabOptionText}>Actividad</Text>
                    { page === 1 && <View style={styles.optionBottomBorder}></View>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pagerViewRef?.current?.setPage(2)}>
                    <Text style={styles.tabOptionText}>Historial</Text>
                    { page === 2 && <View style={styles.optionBottomBorder}></View>}
                </TouchableOpacity>
            </View>
            <PagerView
                ref={pagerViewRef}
                style={styles.pagerViewcontainer}
                initialPage={0}
                onPageSelected={onPageSelected}
            >
                <View style={styles.page} key="0">
                    <Wallet />
                </View>
                <View style={styles.page} key="1">
                    <Text style={styles.subText}>Componente Actividad</Text>
                </View>
                <View style={styles.page} key="2">
                    <Text style={styles.subText}>Componente Historial</Text>
                </View>
            </PagerView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.black,
        flex: 1,
        paddingVertical: 10
    },
    pagerViewcontainer: {
        flex: 1,
    },
    textMoney: {
        color: theme.white,
        fontSize: 40,
        fontFamily: 'Montserrat-Medium'
    },
    moneyContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    eyeButton: {
        marginLeft: 20
    },
    subText: {
        fontSize: 22,
        color: theme.textLight,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
    },
    green: {
        color: theme.green
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginVertical: 10
    },
    page: {
        padding: 20
    },
    tabOptionsContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tabOptionText: {
        color: theme.white,
        fontSize: 18,
        marginBottom: 3
    },
    optionBottomBorder: {
        borderBottomWidth: 4,
        width: '50%',
        alignSelf: 'center',
        borderBottomColor: theme.white,
    }
});