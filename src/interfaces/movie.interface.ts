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
        description: string;
        genre: string[];
        image: string;
    }
    top: {
        titleText: {
            text: string
        }
    }
}