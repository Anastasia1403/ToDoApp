import React from 'react'
import { formatDate } from '../../helpers/date-time-func'
import { StyledTooltip } from './styled'

function ChartTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const taskInfo = payload[0].payload
        return (<StyledTooltip>
                <p>Task: {taskInfo.title}</p>
                <p>Days in progress: {taskInfo.time}</p>
                <p>Deadline: {formatDate(taskInfo.deadline)}</p>
            </StyledTooltip>)
    }
}

export default ChartTooltip