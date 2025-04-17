import { useState, useEffect } from "react";

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status:${response.status}`);
        }

        const json = await response.json();
        if (json) {
          setLoading(false);
          setData(json);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
