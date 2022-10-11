import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/Errorpage";
import Home from "../components/Home";
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
                path: '/chart', element: <Chart></Chart>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },

        ],
    },
])
export default router