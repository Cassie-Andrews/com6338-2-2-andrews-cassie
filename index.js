// Your code here
function greet() {
    let name = prompt("What is your name?", "Name");
        alert("Hello, " + name + "");

    //age
    const age = prompt("How old are you?");
       console.log(parseInt(age));
    

    //need to work on this part, getting confirm alert for both boolean values
    if (window.confirm("Have you had a birthday yet this year?"))
    {
        alert("yes");
    } else {
        alert("no");
    }
   // ((confirm(new Date().getFullYear())) - " + age + " ) {
        //yes!
       // console.log("log yes");
   // } else {
        //no!
      //  console.log("log no") ;
   // }
}