import {
  bsElements,
  generateQuestion3,
} from '@/app/quiz3/constants/bsElements';
import { useElement } from '@/hooks/useElement';

export const useQuiz3 = () => useElement(bsElements, generateQuestion3);
