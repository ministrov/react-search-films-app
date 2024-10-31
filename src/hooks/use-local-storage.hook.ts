import { useEffect, useState } from 'react';

function useLocaleStorage<T>(key: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key) as string);

    if (!res) {
      setData(res);
    }
    // setData(res);
  }, [key]);

  function saveData(newData: T) {
    if (Array.isArray(newData) && newData.length > 0) {
      localStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
      // console.log(newData);
    }
  };

  function getData() {
    return JSON.parse(localStorage.getItem('user-profile') as string);
  }

  // console.log(data);
  // console.log(getData());

  return [data, saveData, getData] as const;
}

export default useLocaleStorage;
