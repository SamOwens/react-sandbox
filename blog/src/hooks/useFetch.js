// Importing necessary hooks from React
import { useState, useEffect } from 'react';

// Custom hook definition
const useFetch = (url) => {
  // State variables to hold fetched data, loading status, and error message
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to handle fetching data when URL changes
  useEffect(() => {
    // Create an AbortController instance to handle fetch cancellation
    const abortCont = new AbortController();

    // Async function to fetch data from the given URL
    const fetchData = async () => {
      try {
        // Fetching the data from the URL with an abort signal
        const response = await fetch(url, { signal: abortCont.signal });

        // Check if the response is not ok, throw an error if so
        if (!response.ok) {
          throw new Error('Fetch failed');
        }

        // Parsing the JSON response
        const result = await response.json();

        // Setting the fetched data to the state
        setData(result);
        // Clearing any previous error messages
        setError(null);
      } catch (err) {
        // Handling the fetch abort error specifically
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          // Setting the error message in case of other failures
          setError(err.message);
        }
      } finally {
        // Indicating that the loading process has finished
        setIsLoading(false);
      }
    };

    // Calling the fetchData function to initiate the fetch
    fetchData();

    // Cleanup function to abort the fetch when the component unmounts or URL changes
    return () => abortCont.abort();
  }, [url]); // Dependency array to re-run effect when URL changes

  // Returning the state variables for data, loading status, and error
  return { data, isLoading, error };
};

// Exporting the custom hook for use in other components
export default useFetch;
