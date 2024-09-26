import {
  generateQuestion2,
  plElements,
} from '@/app/quiz2/constants/plElements';
import { createUseQuizAdvanced, UseQuiz } from '@/hooks/useElement';

export const useQuiz2: () => UseQuiz = createUseQuizAdvanced(
  plElements,
  generateQuestion2
);
