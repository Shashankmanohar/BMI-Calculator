let calculatebtn = document.querySelector(".Calculatebtn");

calculatebtn.addEventListener('click',calculate);

function calculate(){
    let Weight = document.getElementById("weight").value;  
    let Height = document.getElementById("height").value;
    if(Weight.value == "" || Height.value == ""){
        alert("Please fill out all fields!");
    }else {
    let BMI = (Weight/(Height * Height)).toFixed(2);
    let result = `Your BMI is: ${BMI}`;
    if(BMI < 18.5){
        result += "(Underweight)";
    }else if(BMI >= 18.5 &&  BMI <= 25){
        result += "(Normal Weight)";
    }else if(BMI >= 25 &&  BMI <= 30){
        result += "(Overweight)";
    }else if(BMI >= 30 &&   BMI <= 40){
        result += "(Obese)";
    }
    document.getElementsByClassName( 'result' )[0].textContent= result;
    document.getElementById("weight").value ="";
    document.getElementById("height").value ="";
    };
    
}
