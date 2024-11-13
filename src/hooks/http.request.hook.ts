// import { useState } from "react";
// import axios from "axios";
// // import { RootData } from "../interfaces/films-description.interface";

// export const useHttpRequest = () => {
//     const [loading, setLoading] = useState<boolean>(false);

//     const request = async (url: string) => {

//         setLoading(true);

//         try {
//             const { data } = await axios.get(url);
//             if (axios.isAxiosError(Error)) {
//                 throw new Error(`Could not fetch ${url}, status: ${Error}`);
//             }

//             return data;

//         } catch (e) {
//             console.error(e);
//             return;
//         }
//     }

//     return {
//         request,
//         loading
//     }
// };