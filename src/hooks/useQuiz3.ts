import {
  bsElements,
  generateQuestion3,
} from '@/app/quiz3/constants/bsElements';
import { createUseQuizAdvanced } from '@/hooks/useElement';

export const useQuiz3 = () =>
  createUseQuizAdvanced(bsElements, generateQuestion3);
