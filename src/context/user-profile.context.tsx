import { createContext, ReactNode, useState } from "react";
import { FilmsDescription } from "../interfaces/films-description.interface";
import { Profile } from "../interfaces/user.interface";

export interface UserProviderContextProps {
    children: ReactNode;
}

const INITIAL_LIST: FilmsDescription[] = [
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
    usersState: Profile[],
    addItem: (item: Profile) => void,
    changeList: (item: Profile[]) => void,
    filmsState: FilmsDescription[],
    changeFilms: (item: FilmsDescription[] | FilmsDescription) => void
}

export const UserContext = createContext<MyContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: UserProviderContextProps) => {
    const [usersState, setUsersState] = useState<Profile[]>([]);
    const [filmsState, setFilmsState] = useState<FilmsDescription[]>(INITIAL_LIST);
    const addItem = (item: Profile) => {
        setUsersState((prevItems) => [...prevItems, item]);
    };
    const changeList = (item: Profile[]) => {
        setUsersState(item);
    };

    const changeFilms = (item: FilmsDescription | FilmsDescription[]) => {
        if (Array.isArray(item)) {
            setFilmsState(item);
        } else {
            setFilmsState(prevItems => [...prevItems, item]);
        }
    };

    return (
        <UserContext.Provider value={{ usersState, addItem, changeList, filmsState, changeFilms }}>
            {children}
        </UserContext.Provider>
    );
};