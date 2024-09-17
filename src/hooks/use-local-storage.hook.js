// // import { useEffect, useState } from 'react';

// // const INITIAL_STATE = [{
// //   name: 'Вася',
// //   isLogged: true
// // }];

// // export default function useLocaleStorage(key) {
// //   const [data, setData] = useState(INITIAL_STATE);

// //   console.log(data);

// //   useEffect(() => {
// //     const res = JSON.parse(localStorage.getItem(key));
// //     console.log(res);
// //     setData(res);
// //     // if (res) {
// //     //   setData(res);
// //     // }
// //   }, []);

// //   const saveData = (newData) => {
// //     localStorage.setItem(key, JSON.stringify(newData));
// //     setData(newData);
// //   };

// //   return [data, saveData];
// }
