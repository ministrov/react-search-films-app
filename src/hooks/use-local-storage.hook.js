import { useEffect, useState } from 'react';
import { INITIAL_STATE } from '../const/const';

export default function useLocaleStorage(key) {
  const [data, setData] = useState(INITIAL_STATE);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));

    if (res) {
      setData(res);
    }
  }, []);

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
