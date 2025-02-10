const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }))

   

    function checkAndConvert() {
        let userInput = prompt("Please enter a value:");
        let type = typeof userInput;
    
        console.log(`Original input: ${userInput}`);
        console.log(`Type: ${type}`);
    
        if (type === "string") {
            let numConversion = Number(userInput);
            console.log(`Converted to number: ${numConversion}`);
            console.log(`Is NaN: ${isNaN(numConversion)}`);
        } else if (type === "number") {
            console.log(`Converted to string: ${userInput.toString()}`);
        } else if (type === "boolean") {
            console.log(`Converted to string: ${userInput.toString()}`);
            console.log(`Converted to number: ${Number(userInput)}`);
        } else {
            console.log("The input is neither a string, number, nor boolean.");
        }
    }
    
    checkAndConvert();