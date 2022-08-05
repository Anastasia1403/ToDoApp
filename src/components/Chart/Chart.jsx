import React from 'react'
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { calcDaysDifference } from '../../helpers/date-time-func';
import ChartTooltip from '../ChartTooltip/ChartTooltip';


function Chart({ taskList }) {
    const getDataForChart = () => Object.values(taskList).map(task => {
            return {id: task.id,
                    title: task.title,
                    deadline: task.deadline,
                    time: calcDaysDifference(new Date(), task.createdAt)}
        })
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={getDataForChart()}
            >
                <YAxis />
                <Tooltip content={<ChartTooltip />}/>
                <Bar dataKey="time" fill="#712c65" barSize={50}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart