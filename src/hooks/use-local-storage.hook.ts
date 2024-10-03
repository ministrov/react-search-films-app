import { useEffect, useState } from 'react';

export default function useLocaleStorage<T>(key: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key) as string);

    if (res) {
      setData(res);
    }
  }, [key]);

  const saveData = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData] as const;
}
