import { Text, StyleSheet, View } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HOme Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 26
    }
})

// primary color: #7876e9
// dark: #0d102b