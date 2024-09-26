import {
  bsElements,
  generateQuestion3,
} from '@/app/quiz3/constants/bsElements';
import { createUseQuizAdvanced, UseQuiz } from '@/hooks/useElement';

export const useQuiz3: () => UseQuiz = createUseQuizAdvanced(
  bsElements,
  generateQuestion3
);
