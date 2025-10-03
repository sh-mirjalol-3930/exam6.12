import axios from "axios";
import { useEffect, useState } from "react";

export const useOrder = (url) => {
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLaoding(true);
    axios
      .get("https://68ca8081430c4476c349bc0a.mockapi.io/hw/order")
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setLaoding(false));
  }, []);

  return { loading, error, data };
};
