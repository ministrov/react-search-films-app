export interface IMovie {
    imdbId: string;
    main: {
        titleText: {
            text: string
        }
    };
    short: {
        "@type": string,
        datePublished: string,
        duration: string,
        alternateName: string;
        name: string;
        description: string;
        genre: string[];
        image: string;
        review: {
            name: string,
            dateCreated: string,
            reviewBody: string
        }
    }
    top: {
        titleText: {
            text: string
        }
    }
}