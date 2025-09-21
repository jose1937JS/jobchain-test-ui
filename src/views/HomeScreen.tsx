import { Text, StyleSheet, View } from 'react-native'
import PagerView from 'react-native-pager-view';
import VideoPlayer from '../components/VideoPlayer';
import {getVideos} from '../api/Video'
import { useState, useEffect } from 'react';
import {VideoItemShorter} from '../types'

export default function Home() {
    const [videos, setVideos] = useState<VideoItemShorter[]>([])
    const [currentPage, setCurrentPage] = useState(0);

    const getData = async () => {
        const res = await getVideos({ 
            query: 'nature', 
            per_page: 10,
            orientation: 'portrait', 
            size: 'medium'
        })
        if(res) {
            setVideos(res)
        }
    }

    const onPageSelected = (e: any) => {
        const { position } = e.nativeEvent;
        setCurrentPage(position);
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <View style={styles.container}>
            <PagerView
                style={styles.pagerViewcontainer}
                initialPage={0}
                orientation="vertical"
                onPageSelected={onPageSelected}
            >
                {videos?.map((item, index) => (
                    <View key={index}>
                        <VideoPlayer
                            url={item.url}
                            image={item.image}
                            user={item.user}
                            isFocused={index === currentPage}
                        />
                    </View>
                ))}
                
            </PagerView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 26
    },
    pagerViewcontainer: {
        flex: 1,
        width: '100%',
    },
})