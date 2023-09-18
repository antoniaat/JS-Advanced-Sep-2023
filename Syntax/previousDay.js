function previousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
}

previousDay(2016, 9, 30);