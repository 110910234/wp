function weekday(str) {
    const days = {
        "Sunday": 0,
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6
    };

    return days[str];
}


console.log(weekday("Sunday"));   
console.log(weekday("Monday"));    
console.log(weekday("Wednesday")); 
console.log(weekday("Friday"));  
