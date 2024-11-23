function bmiCalculator (weight, height) 
    var bmi = weight / (height * height);
   
    if (bmi < 18.5) {
        interpretation = "Your BMI is <bmi>, so you are underweight."
    } if ( bmi >= 18.5 && bmi <= 24.5) {
	interpretation = "Your BMI is <bmi>, so you have a normal weight."
    } else { interpretation = "Your BMI is <bmi>, so you are overweight."
    }
    return interpretation;