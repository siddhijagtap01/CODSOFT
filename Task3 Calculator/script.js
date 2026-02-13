let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let expression = "";

// Loop through all buttons
buttons.forEach(function(button) {

    button.addEventListener("click", function() {
        let value = button.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";

        } else if (value === "=") {
            try {
                expression = eval(expression);   // Perform calculation
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }

        } else {
            expression += value;
            display.value = expression;
        }
    });

});
