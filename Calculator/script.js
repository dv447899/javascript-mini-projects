const input = document.getElementById("input");
const buttons = document.querySelectorAll('.list');
console.log(buttons)
const blue = document.querySelectorAll("#blue")
const body = document.getElementsByTagName("body")


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.textContent;

        if (buttonValue === "c") {
            // Clear input
            input.value = '';
        } else if (buttonValue === "<") {
            // Remove the last character
            input.value = input.value.slice(0, -1);
        } else if (buttonValue === "=") {
            try {
                // Safely evaluate the expression
                input.value = eval(input.value);
            } catch (error) {
                input.value = "Error";
                console.error("Invalid expression", error);
            }
        }
        else {
            // Append the value of the button clicked to the input
            input.value += buttonValue;
        }
        console.log(input.value)
    });
});

const toggle = document.getElementById("toggle")
console.log(toggle)
toggle.addEventListener('click', (e) => {
    console.log(e.target.checked)
    console.log(blue)
    if (e.target.checked === true) {
        console.log()
        for (let i = 0; i < blue.length; i++) {
            blue[i].style.color = "#4f5152f5";
        }
        body[0].style.background = "#4f5152f5"
    }
    else if (e.target.checked === false) {
        console.log(buttons)
        for (let i = 0; i < blue.length; i++) {
            blue[i].style.color = "#0cafff";
        }
        body[0].style.background = "white"

    }
})
