import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/Errorpage";
import Home from "../components/Home";
import HomeQuiz from "../components/HomeQuiz";
import { quizDataLoader } from "../components/loaders/getQuizData";
import Root from "../components/Root";
import Chart from '../components/Chart'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: quizDataLoader,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/chart', element: <Chart></Chart>
            },
        ],
    },
])
export default router