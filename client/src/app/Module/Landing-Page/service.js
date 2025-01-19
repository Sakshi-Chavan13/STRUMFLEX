import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../../Components/httpClient/httpClient";

export const useDemoForm = () => {
  const { mutate } = useMutation({
    mutationFn: (data) => {
      
      return httpClient("POST", "demos", data);
    },
  });

  return { mutate };
};

export const useRegistrationForm = () => {
  const { mutate } = useMutation({
    mutationFn: (data) => {
      
      return httpClient("POST", "users", data);
    },
  });

  return { mutate };
};