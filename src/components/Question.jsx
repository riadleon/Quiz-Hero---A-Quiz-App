import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'




const Question = ({ question }) => {

    const notify = () => toast(question.correctAnswer);
    const notifyCorrect = () => toast("correct!");
    const notifyWrong = () => toast("You Are Wrong!");

    const handleOption = (event) => {
        const answer = event.target.innerHTML;
        const correctAnswer = question.correctAnswer;

        if (answer === correctAnswer) {
            notifyCorrect();
        } else {
            notifyWrong();
        }


    }

    const handleOptionEye = () => {


        notify();


    }

    return (
        <div className='text-center'>
            <div className='flex justify-between'>
            <div>
            <h3 className=' mb-2 text-xl font-bold leading-none sm:text-2xl text-gray-700'>{question.question}</h3>
            </div>
            <div>
            <button onClick={handleOptionEye}> <EyeIcon className="h-6 w-6 text-blue-500"/> </button>
            </div>
            </div>
            {
                question.options.map(option => <Option
                    key={question.options.indexOf(option)}
                    option={option}
                    handleOption={handleOption}
                ></Option>)
            }
            <ToastContainer />
        </div>
    );
};

const Option = ({ option, handleOption }) => {
    return (
        <div className="text-center grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:grid-cols-2 lg:px-12 xl:px-32">
            <div className='font-semibold'>
                <button onClick={handleOption}>
                    {option}

                </button>
            </div>

        </div>

    )
}

export default Question;