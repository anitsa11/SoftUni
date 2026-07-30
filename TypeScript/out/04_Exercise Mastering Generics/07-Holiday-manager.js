"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    _start;
    _end;
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    set start(val) {
        if (val > this._end) {
            throw new Error("Start date cannot after end date");
        }
        this._start = val;
    }
    set end(val) {
        if (val < this._start) {
            throw new Error("End date cannot be before start date");
        }
        this._end = val;
    }
    getInfo() {
        let startDate = `${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()}`;
        let endDate = `${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;
        return `Holiday: ${startDate} - ${endDate}`;
    }
}
class HolidayManager {
    vacations = new Map();
    reserveVacation(holiday, vacationType) {
        this.vacations.set(holiday, vacationType);
    }
    listReservations() {
        return [...this.vacations.entries()].map((x) => `${x[0].getInfo()} => ${x[1]}`)
            .join("\n");
    }
}
let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
console.log(holidayManager.listReservations());
//# sourceMappingURL=07-Holiday-manager.js.map