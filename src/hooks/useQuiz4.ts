import {
  combinedElements,
  generateQuestion4,
} from '@/app/quiz4/constants/combinedElements';
import { useElement } from '@/hooks/useElement';

export const useQuiz4 = () => useElement(combinedElements, generateQuestion4);
