import {Image, StyleSheet} from 'react-native'
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './views/HomeScreen'
import WalletScreen from './views/WalletScreen'
import NotificationScreen from './views/NotificationScreen'
import MessagesScreen from './views/MessagesScreen'
import SearchScreen from './views/SearchScreen'
import { Fontisto } from '@expo/vector-icons';
import { theme } from './styles/global'
import Header from './components/Header'
import { getHeaderTitle } from '@react-navigation/elements';

const TabStack = createBottomTabNavigator({
	screenOptions: ({ route }) => ({
		tabBarStyle: {
			backgroundColor: theme.black,
			borderColor: theme.black
		},
		header: ({ navigation, route, options }) => {
			const title = getHeaderTitle(options, route.name)
			return (
				<Header
					navigation={navigation}
					title={title}
				/>
			)
		},
		tabBarIcon: ({ focused, size }) => {
			if(route.name == 'SearchScreen') {
				return (
					<Image source={require('../assets/search.png')} style={styles.searchIcon} />
				)
			}

			const icons = {
				'HomeScreen': 'home',
				'WalletScreen': 'wallet',
				'NotificationScreen': 'bell',
				'MessagesScreen': 'comment'
			}
			return (
				<Fontisto 
					// @ts-ignore
					name={icons[route.name]} 
					size={size} 
					color={focused ? 'white' : theme.primary } 
				/>
			)
		}
	}),
	screens: {
		HomeScreen: {
			screen: HomeScreen,
			options: { title: 'Inicio', }
		},
		WalletScreen: {
			screen: WalletScreen,
			options: { title: 'Mi Billetera', }
		},
		SearchScreen: {
			screen: SearchScreen,
			options: { title: 'Buscar', }
		},
		NotificationScreen: {
			screen: NotificationScreen,
			options: { 
				title: 'Notificaciones',
				tabBarBadge: 1,
			}
		},
		MessagesScreen: {
			screen: MessagesScreen,
			options: {
				title: 'Mensajes',
				tabBarBadge: 3,
			}
		}
	},
});

const styles = StyleSheet.create({
	searchIcon: {
		width: 45,
		height: 45,
		marginBottom: 20,
		borderRadius: 22,
		resizeMode: 'contain'
	}
})

const Navigation = createStaticNavigation(TabStack);

export default Navigation