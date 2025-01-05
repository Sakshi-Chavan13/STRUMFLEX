import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../../Components/httpClient/httpClient";

export const useDemoForm = () => {
  const { mutate } = useMutation({
    mutationFn: (data) => {
      
      return httpClient("POST", "demo", data);
    },
  });

  return { mutate };
};
