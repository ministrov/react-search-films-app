import { IFilms } from "./films.interface";

export interface Profile {
    name: string;
    isLogged: boolean;
    favorites: IFilms[]
}