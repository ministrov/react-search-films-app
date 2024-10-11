import { Key } from "react"

export interface RootData {
    ok: boolean
    description: FilmsDescription[]
    error_code: number
}

export interface FilmsDescription {
    id: Key | null | undefined
    rating: number
    poster: string | undefined
    title: string
    isFavorite: boolean
    // "#TITLE": string
    // "#YEAR": number
    // "#IMDB_ID": string
    // "#RANK": number
    // "#ACTORS": string
    // "#AKA": string
    // "#IMDB_URL": string
    // "#IMDB_IV": string
    // "#IMG_POSTER"?: string
    // photo_width?: number
    // photo_height?: number
}