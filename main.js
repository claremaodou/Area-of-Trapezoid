//Set up Button Event Listeners
document.getElementById('calculateBtn').addEventListener('click', setcalculate)

//Calculate Button Functions
function setcalculate() {

        //storing input values into variables
        var base1Input = parseInt(document.getElementById("b1-input").value);
        var base2Input = parseInt(document.getElementById("b2-input").value);
        var hInput = parseInt(document.getElementById("h-input").value);


        // Process - calculate sum
        let finalCalculation = ((base1Input + base2Input)/2)*hInput;

        //putting input variables into the output spot
        document.getElementById('calculateOutput').innerHTML = finalCalculation;
}
