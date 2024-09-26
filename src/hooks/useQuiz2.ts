import {
  generateQuestion2,
  plElements,
} from '@/app/quiz2/constants/plElements';
import { createUseQuizAdvanced } from '@/hooks/useElement';

export const useQuiz2 = () => createUseQuizAdvanced(plElements, generateQuestion2);
