export interface IMovie {
    imdbId: string;
    main: {
        titleText: {
            text: string
        }
    };
    short: {
        alternateName: string;
        name: string;
        descrtiption: string;
        genre: string[];
        image: string;
    }
    top: {
        titleText: {
            text: string
        }
    }
}