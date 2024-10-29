import { useEffect, useState } from 'react';

export default function useLocaleStorage<T>(key: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key) as string);

    if (!res) {
      setData(res);
    }
    // setData(res);
  }, [key]);

  const saveData = (newData: T) => {
    if (Array.isArray(newData) && newData.length > 0) {
      localStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
      // console.log(newData);
    }
  };

  console.log(data);

  return [data, saveData] as const;
}
