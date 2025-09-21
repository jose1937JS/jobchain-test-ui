import { pexelsInstance } from './api'
import videoData from './videoData.json'
import { VideoProps, VideoItemShorter, VideoFile } from '../types'

const getVideos = async (params: VideoProps) => {
    try {
        // const data = await pexelsInstance.get('https://api.pexels.com/videos/search', { params })
        // const videos = data.data;
        const videos = videoData
        let filteredVideos: VideoItemShorter[] = [];

        for (const item of videos?.videos) {
            const url = item.video_files.filter((v: VideoFile) => v.quality === 'hd');            
            if(url?.length < 1) continue;
            
            filteredVideos.push({
                id: item.id,
                width: item.width,
                height: item.height,
                duration: item.duration,
                image: item.image,
                url: url[0].link,
                user: item.user
            });
        }

        return filteredVideos

        // return data
    } catch (error) {
        console.error(error)
    }
}

export { getVideos }