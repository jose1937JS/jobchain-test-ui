import { TextInput, Text, View, StyleSheet } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { theme } from "../styles/global";
import { InputProps } from '../types'

export default function Input({ containerStyle, inputStyle }: InputProps) {
    return (
        <View style={[styles.container, containerStyle]}>
            <SimpleLineIcons name="magnifier" size={18} color={theme.textLight} />
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder="Buscar"
                placeholderTextColor={theme.textLight}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        backgroundColor: theme.inputBg,
        borderRadius: 15,
        padding: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    input: {
        marginLeft: 5,
        color: theme.textLight,
        width: '95%'
    }
});