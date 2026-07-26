enum DaysOfTheWeek {
    "Monday"=1,
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
}

function dayOfTheWeeks(day: number){
    // if (day in DaysOfTheWeek) {
    //     console.log(DaysOfTheWeek[day])
    // } else {
    //     console.log("error")
    // }

    console.log(DaysOfTheWeek[day] || "error")
}

dayOfTheWeeks(1);
dayOfTheWeeks(5);
dayOfTheWeeks(-1);