import moment from "moment";

export const getCurrentTime = () => moment().format('MMMM Do YYYY, h:mm:ss a')

export const formatDate = (date) => moment(date).format("MMM Do yyyy")

const setEqualTime = (datetime) => moment(datetime).hours(12).minutes(0).seconds(0).toString()

export const calcDaysDifference = (date1, date2) => moment(setEqualTime(date1)).diff(setEqualTime(date2), 'days')

export const getDeadlineColor = (numOfDays) => {
    if (numOfDays > 5) return '#69b51d';
        if (numOfDays <= 5 && numOfDays >= 2) return '#f8ba3f'
        else return '#f25074'
}
