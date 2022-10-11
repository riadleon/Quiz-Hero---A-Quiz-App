import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import HomeQuiz from "../components/HomeQuiz";
import { quizDataLoader } from "../components/loaders/getQuizData";
import Root from "../components/Root";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: quizDataLoader,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            // {
            //     path: '/home', element: <Home></Home>
            // },
        ],
    },
])
export default router