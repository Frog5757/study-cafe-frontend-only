import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type Subject = {
  id: string;
  name: string;
};

export const useSubjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${API_URL}/api/subjects`)
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, subjects };
};
