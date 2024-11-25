export interface RootData {
    ok: boolean
    description: FilmsDescription[]
    error_code: number
}

export interface FilmCardType {
    id: string,
    img: string,
    title: string,
    rating: number,
    favorite?: boolean,
    onClick?: () => void
}

export interface FilmsDescription {
    '#IMDB_ID': string,
    '#IMG_POSTER': string,
    '#TITLE': string,
    '#RANK': number,
}