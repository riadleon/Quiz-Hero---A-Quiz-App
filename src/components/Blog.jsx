import React from 'react';

const Blog = () => {
    return (
        <div className=" dark:bg-gray-900 dark:text-gray-100 divide-gray-700 ">
            <div className="  p-3 space-x-1 xl:ml-6">
                <h3 className=" my-4 text-3xl font-semibold">What is the purpose of React Router?</h3>
                <p className="text-sm dark:text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </div>

            <div className="p-3 space-x-1 xl:ml-6">
                <h3 className=" my-4 text-3xl font-semibold">How Does Context Api Works?</h3>
                <p className="text-sm dark:text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>



            <div className="p-3 space-x-1 xl:ml-6">
                <h3 className=" my-4 text-3xl font-semibold">What is UseRef?</h3>
                <p className="text-sm dark:text-gray-400">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.?</p>
            </div>

        </div>
    );
};

export default Blog;