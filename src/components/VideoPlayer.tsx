import React, {useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { useVideoPlayer, VideoView } from 'expo-video';
import { VideoPlayerProps } from '../types'
import { theme } from '../styles/global';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function VideoPlayer({ url, image, user, isFocused }: VideoPlayerProps) {
    const player = useVideoPlayer(url, player => {
        player.loop = true;
        // player.play();
    });

    useEffect(() => {
        if (isFocused) {
            player.play();
        } else {
            player.pause();
        }
    }, [isFocused, player]);

    return (
        <View style={styles.container}>
            <VideoView
                style={styles.video}
                player={player}
            />
            <View style={styles.userContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.agoText}>12m</Text>
                </View>
                <Text style={styles.description}>Descripcion del video 🏞️ 🌍</Text>
                <Text style={styles.descriptionTags}>#nature, #reactnative, #jobchain, #pexel</Text>
            </View>
            <View style={styles.interactionsContainer}>
                <View style={styles.interactionTextContainer}>
                    <FontAwesome name="heart" size={25} color="red" />
                    <Text style={styles.interactionText}>93</Text>
                </View>
                <View style={styles.interactionTextContainer}>
                    <FontAwesome name="comment" size={25} color="white" />
                    <Text style={styles.interactionText}>16</Text>
                </View>
                <View style={styles.interactionTextContainer}>
                    <FontAwesome name="bookmark" size={25} color="white" />
                    <Text style={styles.interactionText}>12</Text>
                </View>
                <View style={styles.interactionTextContainer}>
                    <FontAwesome name="share" size={25} color="white" />
                    <Text style={styles.interactionText}>9</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.black
    },
    video: {
        width: '100%',
        height: '100%',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: theme.white,
        fontSize: 18,
        fontWeight: '500',
        textShadowColor: '#000000ff',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 1
    },
    agoText: {
        color: theme.grey,
        fontSize: 12,
        marginLeft: 10,
        textShadowColor: '#000000',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 1
    },
    description: {
        color: theme.white
    },
    descriptionTags: {
        color: theme.textLight,
        marginTop: 3
    },
    userContainer: {
        // backgroundColor: '#00000021',
        position: 'absolute',
        bottom: 50,
        left: 15
    },
    interactionsContainer: {
        position: 'absolute',
        right: 15,
        bottom: 50,
        height: 250,
        justifyContent: 'space-between'
    },
    interactionText: {
        color: theme.white,
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5
    },
    interactionTextContainer: {
        alignItems: 'center'
    }
})