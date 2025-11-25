import { useState, useEffect } from 'react';

export function useFetch(fetchFn, initValue){
    const [fetchedData, setFetchedData] = useState(initValue);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch Data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

    return {
        fetchedData,
        isFetching,
        setFetchedData,
        error,
    };
}