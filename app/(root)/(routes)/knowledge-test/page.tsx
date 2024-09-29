'use client'
import { quiz } from '@/constants';
// @ts-expect-error lazy
import Quiz from 'react-quiz-component';

const KnowledgeQuiz = () => {
    return (
        <div className="flex flex-col items-center min-h-[70vh] bg-[#f9f9f9] py-10 text-center">
           <div className='font-black text-3xl '>
                How <span className='italic'>financious</span> are you?
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-sm w-[55%] font-bold text-[#9ca3af] py-6 leading-6'>Take this quick quiz to see how well you understand the fundamentals of personal finance. Based on your score, we&apos;ll provide personalized resources to help you improve. If your score is below 60%, we encourage you to use Financio&apos;s tools to further build your financial literacy and reach your goals faster.</p>
                <div className='flex justify-center rounded-3xl text-center py-4 bg-white min-w-[50vw] shadow'>
                    <Quiz quiz={quiz} shuffle={true} shuffleAnswer={true} timer={60} />
                </div>
            </div>
        </div>
    );
}

export default KnowledgeQuiz;