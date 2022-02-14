function computeAge(birthday, currentDate){
    const birthYear = birthday.getFullYear();
    const currYear = currentDate.getFullYear();
    let age = currYear-birthYear-1;

    const birthMonth = birthday.getMonth()
    const currMonth = currentDate.getMonth();
    if (birthMonth < currMonth){
        age += 1;
    } else if (birthMonth==currMonth) {
        const birthDay = birthday.getDate()
        const currDay = currentDate.getDate();
        if (birthDay <= currDay){
            age += 1;
        }
    }
    return age;
}

module.exports = computeAge