import moment from 'moment';
import React, { useEffect, useState } from 'react'

function DateTimeBlock() {

    const [dateTime, setDateTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
    useEffect(() => {
        const getDateTime = setInterval(() => {
            setDateTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }, 1000)
        return () => clearInterval(getDateTime)
    }, [])
    
    return (
        <div>{dateTime}</div>
    )
}

export default DateTimeBlock