// Your code here
function greet() {
    let name = prompt("What is your name?", "Name");
        alert("Hello, " + name + "");

    //age
    var userAge = prompt("How old are you?");
       console.log(parseInt(userAge));
    

    //FIX can't find errors for the year alerts in dev tools but failing tests
    if (window.confirm("Have you had a birthday yet this year?"))
    {
        alert((new Date().getFullYear()) - userAge);
    } else {
        alert((new Date().getFullYear()) - userAge - 1);
    }
}