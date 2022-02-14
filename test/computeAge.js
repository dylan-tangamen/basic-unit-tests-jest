const computeAge = require("../src/computeAge")

test ('Né dans un autre mois avant', () => {
    let birthday = new Date(2000, 0);
    let currentday = new Date(2022, 1);
    expect(computeAge(birthday,currentday)).toBe(22);
})

test ('Né dans un autre mois après', () => {
    let birthday = new Date(2000, 1);
    let currentday = new Date(2022, 0);
    expect(computeAge(birthday,currentday)).toBe(21);
})

test ('Né le même mois, jour avant', () => {
    let birthday = new Date(2000, 0, 1 );
    let currentday = new Date(2022, 0, 2);
    expect(computeAge(birthday,currentday)).toBe(22);
})

test ('Né le même mois, jour après', () => {
    let birthday = new Date(2000, 0,2);
    let currentday = new Date(2022, 0,1);
    expect(computeAge(birthday,currentday)).toBe(21);
})

test ('Né le même mois, même jour', () => {
    let birthday = new Date(2000, 0,1);
    let currentday = new Date(2022, 0,1);
    expect(computeAge(birthday,currentday)).toBe(22);
})