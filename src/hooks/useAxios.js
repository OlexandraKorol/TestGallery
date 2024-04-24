import { useState } from "react";
import axios from "react-native-axios";
import Config from 'react-native-config'

export const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const clientID = Config.VITE_ACCESS_KEY;

    console.log(clientID);

    setIsLoading(true);
    try {
      setIsLoading(false);
      const res = await axios.get(`https://api.unsplash.com${param}`, {
        headers: {
          "Authorization": `Client-ID ${clientID}`,
        },
      });

        setResponse(res.data);
    } catch (err) {
        setError(`${err}`);
    } finally {
        setIsLoading(false);
    }
  };

  return { error, fetchData, response, isLoading };
};