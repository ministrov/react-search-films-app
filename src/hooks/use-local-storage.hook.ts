// import { useEffect, useState } from 'react';

// export default function useLocaleStorage(key: string) {
//   const [data, setData] = useState<{ name: string, isLogged: boolean}>();

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem(key) as string);

//     if (res) {
//       setData(res);
//     }
//   }, [key]);

//   const saveData = (newData: [{ name: string, isLogged: boolean }]) => {
//     localStorage.setItem(key, JSON.stringify(newData));
//     setData(newData);
//   };

//   return [data, saveData];
// }
