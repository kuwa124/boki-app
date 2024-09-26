import { Elements } from '@/constants/type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseElement = () => {
  question: Elements | undefined;
  answer: Elements | undefined;
  result: boolean | undefined;
  score: number;
  totalQuestions: number;
  handleAnswer: (position: string) => void;
  nextQuestion: () => void;
  setTotalQuestions: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
};

export const useElement = (
  elements: Elements[],
  generateQuestion: (availableCategories: Elements[]) => Elements | undefined
): UseElement => {
  return () => {
    const [question, setQuestion] = useState<Elements | undefined>(undefined);
    const [answer, setAnswer] = useState<Elements | undefined>(undefined);
    const [result, setResult] = useState<boolean | undefined>(undefined);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [availableCategories, setAvailableCategories] = useState<Elements[]>([
      ...elements,
    ]);

    useEffect(() => {
      setQuestion(generateQuestion(availableCategories));
    }, []);

    const nextQuestion = () => {
      if (availableCategories.length === 1) {
        setAvailableCategories([...elements]);
      }
      setQuestion(generateQuestion(availableCategories));
      setAnswer(undefined);
      setResult(undefined);
    };

    const checkAnswer = (selectedPosition: Elements) => {
      if (!question) return;
      const correctAnswer = question.answer;
      const isCorrect = selectedPosition.answer === correctAnswer;
      setAnswer(selectedPosition);
      setResult(isCorrect);
      if (isCorrect) setScore(score + 1);
      setTotalQuestions(totalQuestions + 1);
      setAvailableCategories((prev) => prev.filter((cat) => cat !== question));
    };

    const handleAnswer = (position: string) => {
      if (question) {
        const selectedPosition: Elements = {
          id: question.id,
          text: question.text,
          answer: position,
          message: question.message,
        };
        checkAnswer(selectedPosition);
      }
    };

    return {
      question,
      answer,
      result,
      score,
      totalQuestions,
      handleAnswer,
      nextQuestion,
      setScore,
      setTotalQuestions,
    };
  };
};
