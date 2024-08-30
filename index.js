// Your code here
function greet() {
    let name = prompt("What is your name?", "Name");
        alert("Hello, " + name + "");

    //age
    const age = prompt("How old are you?");
       console.log(parseInt(age));
    

    //FIX how to write formulas for 'year - age' and 'year - age + 1'
    if (window.confirm("Have you had a birthday yet this year?"))
    {
        alert(new Date().getFullYear());
    } else {
        alert(new Date().getFullYear());
    }
}