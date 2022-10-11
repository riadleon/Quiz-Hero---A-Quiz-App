import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const QuizContext = createContext([])

const Root = () => {
    const quiz = useLoaderData().data;
    return (
        <QuizContext.Provider value={quiz}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Root;