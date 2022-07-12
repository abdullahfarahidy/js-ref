/*
jld
dlsjf
*/
document.getElementById("yeld").innerHTML = "my motivation letter for scholarship";
console.log("hello");
document.write("<h2>hope it helps</h2>");
console.log("nice but there is an");
console.table(["abdullah", "sayed", "hoyeda", "ahmed", "asmaa", "amira", "mohamed",])
console.log("%c happy %c birth %c date", "color: blue;", "color: violet;", "color: pink;")
console.log(typeof "abdullah")
console.log(typeof 5009.58)
console.log(typeof [45, 53, 32])
console.log(typeof { name: "abdullah", age: 19, faculty: "computerscience", proffesion: "software engineer" })
console.log(typeof true)
console.log(typeof null)
console.log(typeof 1 / 0)
console.log(hyphens)
hyphens.innerHTML = 'compo'
let a = "i love js";
let b = "so much"
document.write(a + " " + b)
console.log(`${a} ${b}`)
let title = "goz"
let desc = "hub"
let date = "9"
let markup = `<div class="cay">hello</div>
.zfjlkjllfl<div class="carv">

</div>`
    ;
document.write(markup);
console.log(typeof NaN);
console.log(20 / 5)
console.log(2 ** 4)
console.log(45 % 7)
console.log(+100);
console.log(+"100");
console.log(-"100");
console.log(-"-100");
console.log(-"fyx");
console.log(-"23.4");
console.log(-true);
console.log(-0xff);
console.log(-null);
console.log(Number("0xff"));
console.log(1000_1000_100)
console.log(3e9)
console.log(Number.MAX_SAFE_INTEGER);
console.log(100..toString());
console.log(Math.round(34.7));
console.log(Math.max(23, 646, 12, 8, 7342));
console.log(Math.pow(23, 5));
console.log(Math.random());
let mazin = "swe1"
console.log(mazin)
console.log(0xf3)
let bt = "   bananat hry";
console.log(bt.substring(0, 4));
console.log(bt.includes("ban"))
console.log(bt.startsWith("b"))
console.log(bt.endsWith("t"))
console.log(bt.length)
console.log(bt.charAt(3))
console.log(bt.trim().charAt(4).toUpperCase());
console.log(bt.indexOf("r"));
console.log(bt.lastIndexOf("hry"))
console.log(bt.slice(4));
console.log(bt.slice(5, 8));
console.log(bt.split("", 14))/*
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate
*/

let grab = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(grab.charAt(2).toUpperCase() + grab.slice(3, 6)); // Zero

// 8 H
console.log(grab.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(grab.slice(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(grab.slice(0, 6) + " " + grab.slice(11, 17)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(grab.charAt(0).toLowerCase() + grab.slice(1, 17).toUpperCase()); // eLZERO WEB SCHOOl
let e3 = 34
console.log((45 === "45") || (e3 == 34))
let velocity = 45;
let distance = 40;
if (distance > velocity) {
    console.log("time is " + (distance / velocity) + "seconds")
}
else if (velocity == distance) {
    console.log("time is 1 s")
}
else {
    console.log("time is " + distance / velocity + "s")
}
/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
        ? console.log("20 To 60")
        : theAge > 60
            ? console.log("Larger Than 60")
            : console.log("Unknown")

let day= 2
switch (day){
    case 0:
        console.log("brah")
        break;
    case 1:
        console.log("good morning");
        break;
    case 2:
        console.log("good evening")
    default :
    console.log("take care of yourself")
}

let day1 = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day9 = "World";
// Output => "Its Not A Valid Day"