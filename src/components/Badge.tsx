import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { theme } from '../styles/global'
import { BadgeProps } from '../types'

export default function Badge({ title, onPress, style }: BadgeProps) {
    return (
        <TouchableOpacity style={[styles.badge, style]} onPress={() => onPress()}>
            <Text style={styles.badgeText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: 20,
        backgroundColor: theme.black,
        borderWidth: 1,
        borderColor: theme.primary,
        padding: 10,
        paddingHorizontal: 15,
    },
    badgeText: {
        color: theme.white
    }
})