import {
  AccountingCategoryQuestion,
  categoryPositions,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { usePage } from '@/hooks/usePage';

type Quiz1MessageProps = {
  question: AccountingCategoryQuestion;
};

export const Quiz1Message = ({ question }: Quiz1MessageProps) => {
  const { currentPage } = usePage();

  const message = categoryPositions[question.category].message;

  if (currentPage !== 1) return; //何もしない（早期リターン）

  return (
    <div className='my-2'>
      <p className='text-xs sm:text-base font-semibold text-left lg:text-center whitespace-pre-line'>
        解説：{question.category}は{message}
      </p>
    </div>
  );
};
