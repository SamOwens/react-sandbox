import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) {
          throw new Error('Fetch failed');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          setError('Fetch Aborted');
        } else {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
