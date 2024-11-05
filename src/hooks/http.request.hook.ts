import { useState } from "react";
import { RootData } from "../interfaces/films-description.interface";

export const useHttpRequest = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const request = async (url: string) => {

        setLoading(true);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json() as RootData;

            setLoading(false);

            return data;

        } catch (e) {
            console.error(e);
            return;
        }
    }

    return {
        request,
        loading
    }
};