const { endOfToday, differenceInDays } = require("date-fns");

export default function calculateTimeUntilDue(date) {
    const today = endOfToday();
    const difference = differenceInDays(date, today)
    return difference;
}