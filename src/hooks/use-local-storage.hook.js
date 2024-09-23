import { useEffect, useState } from 'react';

export default function useLocaleStorage(key) {
  const [data, setData] = useState();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));

    if (res) {
      setData(res);
    }
  }, [key]);

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
