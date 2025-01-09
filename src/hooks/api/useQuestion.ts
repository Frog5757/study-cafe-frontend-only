import { useEffect, useState } from "react";
import axios from "axios";
import humps from "humps";

const API_URL = import.meta.env.VITE_API_URL;

export type Question = {
  id: string;
  order: string;
  unitId: string;
  description: string;
  resultMessage: string; 
};

export const useQuestions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Question[]>(`${API_URL}/api/questions`)
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const us = response.data.map((a: any) => humps.camelizeKeys(a));
        setQuestions(us);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, questions };
};
