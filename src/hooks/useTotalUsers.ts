import { useEffect, useState } from 'react';



const useTotalUsers = () => {
  const [totalUsersCount, setTotalUsersCount] = useState<number>(124);

  useEffect(() => {
    const getTotalUsers = async () => {
      try {
        const fetchTotalUsers = async () => {
          const response = await fetch('https://api.thunderhack.net/users/online');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          setTotalUsersCount((await response.json()).length);
        };

        fetchTotalUsers();
      } catch (err: any) {
        setTotalUsersCount(124);
      }
    };

    getTotalUsers();
  }, []);

  return totalUsersCount;
};

export default useTotalUsers;
