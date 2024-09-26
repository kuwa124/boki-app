import {
  generateQuestion2,
  plElements,
} from '@/app/quiz2/constants/plElements';
import { useElement } from '@/hooks/useElement';

export const useQuiz2 = useElement(plElements, generateQuestion2);
