import {
  combinedElements,
  generateQuestion4,
} from '@/app/quiz4/constants/combinedElements';
import { createUseQuizAdvanced, UseQuiz } from '@/hooks/useElement';

export const useQuiz4: () => UseQuiz = createUseQuizAdvanced(
  combinedElements,
  generateQuestion4
);
