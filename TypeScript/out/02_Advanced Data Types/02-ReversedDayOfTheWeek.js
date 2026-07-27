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
function reversedDayOfTheWeek(day) {
    console.log(DaysOfTheWeek[day] || "error");
}
reversedDayOfTheWeek('Monday');
reversedDayOfTheWeek('Sunday');
reversedDayOfTheWeek('invalid');
//# sourceMappingURL=02-ReversedDayOfTheWeek.js.map