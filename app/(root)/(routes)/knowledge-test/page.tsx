'use client'
import { quiz } from '@/constants';
import Quiz from 'react-quiz-component';

const KnowledgeQuiz = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
                Knowledge Test
            </div>
            <Quiz quiz={quiz}/>
        </div>
    );
}

export default KnowledgeQuiz;