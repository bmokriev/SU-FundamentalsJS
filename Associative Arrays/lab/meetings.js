function meetings(input) {
    const schedule = {};

    for (const meeting of input) {
        let [day, person] = meeting.split(' ')
        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }

    }

    for (const e in schedule) {
        console.log(`${e} -> ${schedule[e]}`);
    }


}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])