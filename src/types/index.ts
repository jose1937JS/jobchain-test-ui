export type BadgeItem = {
  id: number,
  title: string,
  isPressed: boolean
}

export type CoinResponse = CoinResponseObject[]

export interface CoinResponseObject {
  id?: string
  symbol: string
  name: string
  image: string
  current_price: number
  ath_change_percentage?: number
  atl_change_percentage?: number
  market_cap?: number
  market_cap_rank?: number
  fully_diluted_valuation?: number
  total_volume?: number
  high_24h?: number
  low_24h?: number
  price_change_24h?: number
  price_change_percentage_24h?: number
  market_cap_change_24h?: number
  market_cap_change_percentage_24h?: number
  circulating_supply?: number
  total_supply?: number
  max_supply?: number
  ath?: number
  ath_date?: string
  atl?: number
  atl_date?: string
  roi?: any
  last_updated?: string
}

export type InputProps = {
  inputStyle?: object,
  containerStyle?: object,
}

export interface HeaderProps {
  title: string,
  navigation?: any
}

export type BadgeProps = {
  title: string,
  onPress: Function,
  style?: object
}

export type PageSelectedEvent = {
  position: number
}

export type FloatingButtonProps = {
  onPress: Function
}

export type CoinsProps = {
  vs_currency: string,
  per_page: number
}

type LatLng = {
  latitude: number;
  longitude: number;
};

export type Region = LatLng & {
  latitudeDelta: number;
  longitudeDelta: number;
};

export interface VideoProps {
  query: string,
  per_page?: number,
  orientation?: string,
  size?: string
}

interface VideoUser {
  id: number
  name: string
  url: string
}

export interface VideoFile {
  id: number
  quality: string
  file_type: string
  width: number
  height: number
  fps: number
  link: string
  size: number
}

interface VideoPicture {
  id: number
  nr: number
  picture: string
}

export interface VideoItem {
  id: number
  width: number
  height: number
  duration: number
  full_res: any
  tags: any[]
  url: string
  image: string
  avg_color: any
  user: VideoUser
  video_files: VideoFile[]
  video_pictures: VideoPicture[]
}
export interface VideoItemShorter {
  id: number,
  width: number,
  height: number,
  duration: number,
  image: string,
  url: string,
  user: VideoUser
}

export interface VideoPlayerProps {
  url: string,
  image: string,
  isFocused: boolean,
  user: VideoUser
}