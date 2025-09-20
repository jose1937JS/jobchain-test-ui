import { Text, View, StyleSheet, Image } from 'react-native'
import { theme } from '../styles/global'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderProps } from '../types'

export default function Header({ title }: HeaderProps) {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
			<Image source={require('../../assets/icon.png')} style={styles.icon} />
			<Text style={styles.text}>{title}</Text>
			<Image src="https://avatar.iran.liara.run/public" style={styles.avatar} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: theme.black,
		padding: 20,
	},
	text: {
		color: theme.textLight,
		fontSize: 18
	},
	icon: {
		width: 25,
		height: 25
	},
	avatar: {
		width: 35,
		height: 35
	}
})