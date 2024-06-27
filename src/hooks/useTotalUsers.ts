import { useState, useEffect } from 'react';

const fetchTotalUsers = async () => {
  const response = await fetch('/api/play');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

const useTotalUsers = () => {
  const [totalUsersCount, setTotalUsersCount] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTotalUsers = async () => {
      try {
        const result = await fetchTotalUsers();
        setTotalUsersCount(result.totalUsersCount);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getTotalUsers();
  }, []);

  return { totalUsersCount, error, isLoading };
};

export default useTotalUsers;
