import { useState, useEffect } from 'react';
import axios from 'axios';

interface FoodTruck {
  address: string;
  // Add other properties if needed
}

const useRandomFoodTruckAddress = (): [string | null, boolean] => {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<FoodTruck[]>('https://data.sfgov.org/resource/rqzj-sfat.json');
        const data = response.data;
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomAddress = data[randomIndex].address;

        setAddress(randomAddress);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [address, loading];
};

export default useRandomFoodTruckAddress;
