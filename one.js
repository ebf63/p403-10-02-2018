var not = Number(prompt("Enter grade :"));

if
        (not > 100 || not < 0) {
            console.log("Please enter a number between 100 - 0")
} else if
        (not >= 90) {
            console.log("Your grade is A");
} else if 
        (not >= 80){
            console.log("Your grade is B");
} else if
        (not >= 70) {
            console.log("Your grade is C");
} else if 
        (not >= 60){
            console.log("Your grade is D");
} else if
        (not >= 40){
            console.log("Your grade is E")
    }else 
        {
            console.log("Your grade is F")
        }



