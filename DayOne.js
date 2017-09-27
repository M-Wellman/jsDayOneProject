//creates globally scoped variables to access grade input
let sum = 0;
let avg = 0;
let counter = 0;

function grader(){
  //creates an array to store the different input values into
  var inputs = document.getElementsByTagName('input');
  //iterates over each input and displays the grade and average
  for (let x = 0; x<inputs.length; x++){
    //accesses the value of each input
    let getGrade = inputs[x].value;
    let grade = parseFloat(getGrade);
    //tracks the average grade
    sum += grade;
    counter++;
    avg = sum / counter;
//creates a system to give a letter grade based on input
//if / else if loop to test for grade
    if(grade === 100){
      console.log(grade + " Perfect A!");
    } else if(grade <= 99 && grade >= 90){
      console.log(grade +" A");
    } else if(grade <= 89 && grade >= 80){
      console.log(grade + " B");
    } else if(grade <= 79 && grade >= 70){
      console.log(grade + " C");
    } else if(grade <= 69 && grade >= 60){
      console.log(grade + " D");
    } else if(grade <= 59 && grade >= 0){
      console.log(grade + " F");
    }
  }
  //displays average grade
  console.log("Avg: " + avg);
}


//creates a function that works with the button to make another gradeBox
function createBox(){
  var linebreak = document.createElement("br");
  document.body.appendChild(linebreak);

  var gradeBox = document.getElementById("gradeBox");
  var clone = gradeBox.cloneNode();
  document.body.appendChild(clone);
}
