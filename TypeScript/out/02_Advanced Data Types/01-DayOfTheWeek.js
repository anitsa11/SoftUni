"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
    DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
    DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
    DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 7] = "Sunday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
function dayOfTheWeeks(day) {
    if (day in DaysOfTheWeek) {
        console.log(DaysOfTheWeek[day]);
    }
    else {
        console.log("error");
    }
}
dayOfTheWeeks(1);
dayOfTheWeeks(5);
dayOfTheWeeks(-1);
//# sourceMappingURL=01-DayOfTheWeek.js.map