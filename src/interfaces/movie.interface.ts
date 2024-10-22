export interface IMovie {
    imdbId: string;
    main: {};
    short: {
        alternateName: string;
        name: string;
        descrtiption: string;
        genre: string[];
        image: string;
    }
}