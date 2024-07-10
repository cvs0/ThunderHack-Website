import { useEffect, useState } from 'react';

const useAllUsers = () => {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch(
          `https://api.thunderhack.net/users/online`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub releases');
        }

        setDownloads((await response.json()).length);
      } catch (error) {
        console.error('Error fetching GitHub downloads:', error);
        setDownloads(null);
      }
    };

    fetchDownloads();
  }, []);

  return downloads;
};

export default useAllUsers;
