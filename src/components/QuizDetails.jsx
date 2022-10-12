import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz);

    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg '>
            <h3 className=' text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl'>Course Name: {quiz.data.name} </h3>
            <div className=''>
                <img className='object-cover w-76 h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80' src={quiz.data.logo} alt="" />
            </div>
            {
                quiz.data.questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }

        </div>
    );
};

export default QuizDetails;