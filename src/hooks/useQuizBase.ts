import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Position } from '@/constants/type';

export type UseQuizBase<QuestionType, CategoryType> = () => {
  question: QuestionType | undefined;
  answer: Position | undefined;
  result: boolean | undefined;
  score: number;
  totalQuestions: number;
  checkAnswer: (selectedPosition: Position) => void;
  nextQuestion: () => void;
  setTotalQuestions: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
};

export function createUseQuizBase<QuestionType, CategoryType>(
  generateQuestion: (categories: CategoryType[]) => QuestionType,
  initialCategories: CategoryType[],
  getCorrectAnswer: (question: QuestionType) => Position,
  checkCorrectAnswer: (
    question: QuestionType,
    selectedPosition: Position
  ) => boolean
): UseQuizBase<QuestionType, CategoryType> {
  return () => {
    const [question, setQuestion] = useState<QuestionType | undefined>(
      undefined
    );
    const [answer, setAnswer] = useState<Position | undefined>(undefined);
    const [result, setResult] = useState<boolean | undefined>(undefined);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [availableCategories, setAvailableCategories] = useState<
      CategoryType[]
    >([...initialCategories]);

    useEffect(() => {
      setQuestion(generateQuestion(availableCategories));
    }, []);

    const nextQuestion = () => {
      if (availableCategories.length === 1) {
        setAvailableCategories([...initialCategories]);
      }
      setQuestion(generateQuestion(availableCategories));
      setAnswer(undefined);
      setResult(undefined);
    };

    const checkAnswer = (selectedPosition: Position) => {
      if (!question) return;

      const isCorrect = checkCorrectAnswer(question, selectedPosition);

      setAnswer(selectedPosition);
      setResult(isCorrect);
      if (isCorrect) setScore(score + 1);
      setTotalQuestions(totalQuestions + 1);

      setAvailableCategories((prev) =>
        prev.filter((cat) => cat !== (question as any).category)
      );
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        if (result !== undefined) {
          nextQuestion();
        }
      }, 3000);
      return () => clearTimeout(timer);
    }, [result]);

    return {
      question,
      answer,
      result,
      score,
      totalQuestions,
      checkAnswer,
      nextQuestion,
      setTotalQuestions,
      setScore,
    };
  };
}
