import React from 'react'
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { calcDaysDifference, formatDate } from '../../helpers/date-time-func';
import { StyledTooltip } from './styled';

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const taskInfo = payload[0].payload
        return (<StyledTooltip>
                <p>Task: {taskInfo.title}</p>
                <p>Days in progress: {taskInfo.time}</p>
                <p>Deadline: {formatDate(taskInfo.deadline)}</p>
            </StyledTooltip>)
    }
}

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
                <Tooltip content={<CustomTooltip />}/>
                <Bar dataKey="time" fill="#712c65" barSize={50}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart