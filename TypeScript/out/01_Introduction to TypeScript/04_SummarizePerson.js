"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const fullName = middleName
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;
    const hobbiesResult = !hobbies || hobbies.length === 0 ? "-"
        : hobbies.join(", ");
    const workInfoResult = !workInfo ? "-"
        : `${workInfo[0]} -> ${workInfo[1]}`;
    return [id, fullName, age, hobbiesResult, workInfoResult];
}
console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
//# sourceMappingURL=04_SummarizePerson.js.map