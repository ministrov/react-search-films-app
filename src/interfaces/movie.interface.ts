export interface IMovie {
    imdbId: string;
    main: {};
    short: {
        name: string;
        descrtiption: string;
        genre: string[];
        image: string;
    }
}