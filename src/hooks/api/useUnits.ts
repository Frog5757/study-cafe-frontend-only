import { useEffect, useState } from "react";
import axios from "axios";
import humps from "humps";

const API_URL = import.meta.env.VITE_API_URL;

export type Unit = {
  id: string;
  name: string;
  subjectId: string;
};

export const useUnits = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/units`)
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const us = response.data.map((a: any) => humps.camelizeKeys(a));
        setUnits(us);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { isLoading, units };
};
