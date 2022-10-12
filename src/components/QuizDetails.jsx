import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    
    return (
        <div>
            <h3>Course Name: {quiz.data.name} </h3>
            {

            }
        </div>
    );
};

export default QuizDetails;