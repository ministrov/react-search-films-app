import { useState, useCallback } from "react";
import { RootData } from "../interfaces/films-description.interface";

export const useHttpRequest = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<RootData | null>(null);

    const request = useCallback(
        async (
            url: string
        ) => {
            setLoading(true);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
                }
                const responseData = await response.json() as RootData;
                setData(responseData);

                setLoading(false);

                return data;

            } catch (e) {
                console.error(e);
                return;
            }
        },
        []
    );

    return {
        data,
        loading,
        request
    }
};