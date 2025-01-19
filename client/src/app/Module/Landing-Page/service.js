import { httpClient } from "@/app/Components/httpClient/httpClient";
import { useMutation } from "@tanstack/react-query";

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
