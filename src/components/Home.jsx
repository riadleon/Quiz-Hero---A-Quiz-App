import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
        </section>
    );
};

export default Home;
