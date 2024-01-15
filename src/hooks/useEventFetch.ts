import { useState, useEffect } from 'react';

export const useEventFetch = (url: string, event: string, uin: string) => {
  const [data, setData] = useState<{message: string}>()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          cache: 'no-cache',
          method: 'POST',
          headers: {
                'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uin: uin, event: event }),
        });
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};