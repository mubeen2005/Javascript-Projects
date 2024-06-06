let input = document.querySelector(".dob");
let btn = document.querySelector(".button");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

btn.onclick = () => {
    if (input.value === "") {
        alert("Please Enter Your Birth Date");
    } else {
        let dobdate = new Date(input.value);
        let today = new Date();

        let year = today.getFullYear() - dobdate.getFullYear();
        let month = today.getMonth() - dobdate.getMonth();
        let day = today.getDate() - dobdate.getDate();

        // Adjust the age if the birth date hasn't occurred yet this year
        if (month < 0 || (month === 0 && day < 0)) {
            year--;
            month += 12;
        }

        // Adjust the month if day difference is negative
        if (day < 0) {
            month--;
            // Get the number of days in the previous month
            let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            day += prevMonth.getDate();
        }

        // Display the age in the respective boxes
        box1.innerHTML = ` Year <br><br>${year}`;
        box2.innerHTML = ` Month <br><br> ${month}`;
        box3.innerHTML = `Days <br><br>${day}`;

        input.value ="";

        console.log(`Age: ${year} years, ${month} months, ${day} days`);
    }
};
