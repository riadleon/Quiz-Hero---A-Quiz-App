
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizContext } from './Root';





export const Chart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const dataLoaded = data.data.data;
                console.log(dataLoaded);
                setData(dataLoaded)
            });

    }, []);
    return (
        <div className='justify-center '>
            <h1 className="py-9 text-4xl font-bold leading-none sm:text-4xl xl:max-w-3xl text-gray-800">
                The Bar Chart Shows The Quantity Of The Items This App.
            </h1>
            <ResponsiveContainer width={500} height={300}>
                <LineChart
                    
                    
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;

