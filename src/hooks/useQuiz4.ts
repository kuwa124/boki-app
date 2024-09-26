import {
  combinedElements,
  generateQuestion4,
} from '@/app/quiz4/constants/combinedElements';
import { createUseQuizAdvanced } from '@/hooks/useElement';

export const useQuiz4 = () =>
  createUseQuizAdvanced(combinedElements, generateQuestion4);
