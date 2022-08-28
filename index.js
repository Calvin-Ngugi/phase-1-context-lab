/* Your Code Here */

function createEmployeeRecord (employee){
    //This loads the employee array into its corresponding object properties
    const employeeRecords = {
        firstName : employee[0],
        familyName : employee[1],
        title : employee[2],
        payPerHour : employee[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employeeRecords;
}

function createEmployeeRecords(employee){
    //initialize an empty array to store new records
    const allEmployeeRecords = employee.map(record =>createEmployeeRecord(record))
    //why does it not work with brackets and curly braces... I don't know
    return allEmployeeRecords;
}

function createTimeInEvent(dateStamp){
    //splitting the date into arrays that can be grabbed separately as hour and date
    let [date, hour] = dateStamp.split(" ");
    //We use this to refer to the employee object
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(dateStamp){
    //splitting the date into arrays that can be grabbed separately as hour and date
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: 'TimeOut',
        //date format is from yy,mm,dd,hh,mm,ss... thus date comes b4 hour
        //turns the hour into an integer that can be called
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(event => event.date === date);
    let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
      let totalTimeWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
      return parseInt(totalTimeWorked, 10);
}

function wagesEarnedOnDate(date) {
    return parseInt(hoursWorkedOnDate.apply(this, [date]) * this.payPerHour.toString());
}

function findEmployeeByFirstName(sourceArray, firstName) {
    return sourceArray.find(findFirst=>findFirst.firstName === firstName)
}

function calculatePayroll (employeeRecord) {
    let records = employeeRecord.reduce((allInfo, datesRecords)=>{
        return allInfo + allWagesFor.apply(datesRecords);
    }, 0)
    return parseInt(records);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}