import {useEffect, useState} from 'react';

type FetchDataType<T> = {
  data: T[];
  isloading: boolean;
  error: string | null;
};

const useFetch = <T,>(url: string): FetchDataType<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        setError('Error loading data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, isloading, error};
};

export default useFetch;
