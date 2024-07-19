const { endOfToday, differenceInDays } = require("date-fns");

export default function calculateTimeUntilDue(date) {
    const today = endOfToday();
    let difference = differenceInDays(date, today)
    if (difference < 0) 
        return "Project is past due!!";

    difference++;
    return "Due in " + difference + " days";
}