export interface RootData {
    ok: boolean
    description: FilmsDescription[]
    error_code: number
}

export interface FilmsDescription {
    '#IMDB_ID': string,
    '#IMG_POSTER': string,
    '#TITLE': string,
    '#RANK': number,
}