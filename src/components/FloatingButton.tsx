import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { theme } from '../styles/global'
import {FloatingButtonProps} from '../types'

export default function FloatingButton({onPress}: FloatingButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
            <Image source={require('../../assets/icon-white.png')} style={styles.logo} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: 50,
        height: 50,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100,
        right: 20
    },
    logo: {

    }
})