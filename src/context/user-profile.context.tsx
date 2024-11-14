import { createContext, ReactNode, useState } from "react";
// import { FilmsDescription } from "../interfaces/films-description.interface";
import { FilmCardType } from "../interfaces/films-description.interface";
import { Profile } from "../interfaces/user.interface";

export interface UserProviderContextProps {
    children: ReactNode;
}

export interface ListItem {
    '#IMDB_ID': string,
    '#IMG_POSTER': string,
    '#TITLE': string,
    '#RANK': number,
}

const INITIAL_LIST: ListItem[] = [
    {
        "#IMDB_ID": '1',
        "#TITLE": 'Black Widow',
        "#IMG_POSTER": '/poster-1.png',
        "#RANK": 324
    },
    {
        "#IMDB_ID": '2',
        "#TITLE": 'Shang Chi',
        "#IMG_POSTER": '/poster-2.png',
        "#RANK": 124
    },
    {
        "#IMDB_ID": '3',
        "#TITLE": 'Loki',
        "#IMG_POSTER": '/poster-3.png',
        "#RANK": 235
    },
    {
        "#IMDB_ID": '4',
        "#TITLE": 'How I Met Your Mother',
        "#IMG_POSTER": '/poster-4.png',
        "#RANK": 8125
    },
];

export interface MyContextType {
    filmsState: ListItem[],
    changeFilms: (item: ListItem[] | ListItem) => void
}

export const UserContext = createContext<MyContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: UserProviderContextProps) => {
    // const [usersState, setUsersState] = useState<Profile[]>([]);
    const [filmsState, setFilmsState] = useState<ListItem[]>(INITIAL_LIST);
    // const addItem = (item: Profile) => {
    //     setUsersState((prevItems) => [...prevItems, item]);
    // };
    // const changeList = (item: Profile[]) => {
    //     setUsersState(item);
    // };

    const changeFilms = (item: ListItem | ListItem[]) => {
        if (Array.isArray(item)) {
            setFilmsState(item);
        } else {
            setFilmsState(prevItems => [...prevItems, item]);
        }
    };

    return (
        <UserContext.Provider value={{ filmsState, changeFilms }}>
            {children}
        </UserContext.Provider>
    );
};