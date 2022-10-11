import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeQuiz from "./HomeQuiz";
import { QuizContext } from "./Root";

const Home = () => {
    const quiz = useContext(QuizContext);
    console.log(quiz);
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        Welcome To Quiz Hero Application
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                        Best Quiz platform for judging the quality of your talent .
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/blog">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                            >
                                Learn More...
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <h3 className="justify-center items-center text-3xl font-bold leading-none sm:text-3xl xl:max-w-3xl text-gray-800 py-16" >Do You Want To Justify Yourself ?</h3>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>

                    {
                        Object.values(quiz).map(q => <HomeQuiz
                            key={q.id}
                            quizes={q}
                        ></HomeQuiz>)
                    }
                </div>
            </div>
        </section>


    );
};

export default Home;
