
let output = document.getElementById("output").value

function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    
    let BMI = (weight / Math.pow(height/100, 2)).toFixed(1);

    // console.log(BMI)
   

    if (BMI <= 16.0) {
        document.getElementById("message").innerHTML = "You are Severely underweight.";
    } else if (BMI >=16.1 && BMI <= 18.4) {
        document.getElementById("message").innerHTML = "You are underweight"
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById("message").innerHTML = "Congratulations you are Normal and Healthy!!!!"
    } else if (BMI >= 25.0 && BMI < 29.9) {
        document.getElementById("message").innerHTML = "You are Overweight"
    } else if (BMI >= 30.0 && BMI < 34.9) {
        document.getElementById("message").innerHTML = "You are Moderately Obese"
    } else if (BMI >= 35.9 && BMI < 39.9) {
        document.getElementById("message").innerHTML = "You are Severely Obese"
    } else if (BMI >= 40.4) {
        document.getElementById("message").innerHTML = "You are Overweight"
    }
    document.getElementById("heading").innerHTML = "Your BMI is :";
    document.getElementById("output").innerHTML = BMI;
}

function reload() {
    window.location.reload();
}