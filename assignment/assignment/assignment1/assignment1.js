
let selected = null;
let correct = false;


function selectAnswer(option, answer) {

    selected = option;
    correct = answer;

    // Remove yellow from other options
    let options = option.parentElement.getElementsByClassName("option");

    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "lightgray";
        options[i].style.color = "black";
    }

    // Show selected option
    option.style.backgroundColor = "yellow";
}


function nextQuestion(number) {

    if (selected == null) {
        alert("Please select an answer");
        return;
    }


    // Check answer
    if (correct == true) {
        selected.style.backgroundColor = "green";
        selected.style.color = "white";
    }
    else {
        selected.style.backgroundColor = "red";
        selected.style.color = "white";
    }


    // Move to next question
    setTimeout(function() {

        document.getElementById("q" + number).style.display = "none";

        if (number < 4) {

            document.getElementById("q" + (number + 1)).style.display = "block";

            selected = null;
            correct = false;

        }
        else {

            document.getElementById("result").innerHTML =
                "Quiz Completed!";

        }

    }, 500);

}


