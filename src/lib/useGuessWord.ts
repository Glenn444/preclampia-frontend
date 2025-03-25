import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type GuessPayload = {
  Age: string;
    Pre_pregnancy_Weight: string;
    Parity: string;
    Annual_Income: string;
    Socioeconomic_Status: string;
    History_of_Hypertension: string;
    History_of_Diabetes: string;
    History_of_Preeclampsia: string;
    Proteinuria_Levels: string;
    Month: string;
    Systolic_BP: string;
    Diastolic_BP: string;
};

export function useGuessWord() {
  return useMutation({
    mutationFn: async ({ ...formData }: GuessPayload) => {
      const response = await axios.post(
        'https://preclampia-api.onrender.com/predict',
        { ...formData }
      );
      return response.data;
    },
  });
}
