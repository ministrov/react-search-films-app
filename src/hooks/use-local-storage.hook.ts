import { useEffect, useState } from 'react';

export default function useLocaleStorage<T>(key: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key) as string);

    // console.log(res);
    // console.log(typeof res);

    if (res) {
      setData(res);
    }
  }, [key]);

  const saveData = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
    // console.log(newData);
  };

  console.log(data);

  return [data, saveData] as const;
}
