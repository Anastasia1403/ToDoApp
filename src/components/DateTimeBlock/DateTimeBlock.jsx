import React, { useEffect, useState } from 'react'
import { getCurrentTime } from '../../helpers/getCurrentTime'

function DateTimeBlock() {
    

    const [dateTime, setDateTime] = useState(getCurrentTime())
    useEffect(() => {
        const getDateTime = setInterval(() => {
            setDateTime(getCurrentTime())
        }, 1000)
        return () => clearInterval(getDateTime)
    }, [])
    
    return (
        <div>{dateTime}</div>
    )
}

export default DateTimeBlock