// Import readline module  and set up readline interface
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Assigning grades for various marks
function studentMarks(marks){
        if (marks > 79 && marks <= 100){
            console.log(`A`);
            
        }else if (marks >= 60 && marks <= 79){
            console.log(`B`);
        }else if (marks >= 50 && marks <= 59){
            console.log(`C`);
            
        }else if (marks >= 40 && marks <= 49){
            console.log(`D`);
            
        }else if (marks >= 0 && marks <40){
            console.log(`E`);
            
        }else {
            console.log(`Invalid`);
            
        }
    }


 // Creating function to check student name, grade and marks       
function studentGrades(){
    let students = [];
    function askStudentName(){
        rl.question(`Please input your name! or type done to finish:`, function(nameS){
            //End process if user input done
            if (nameS === `done`){
                rl.close();
            }else{
                askStudentMarks(nameS)
            }
            
        })
    }
    //Ask student marks
    function askStudentMarks(nameS){
        rl.question(`Please enter ${nameS} marks!`, function(marks){
            if (isNaN(marks) || marks < 0 || marks >100){
                //Prompting user to input marks again if invalid input.
                console.log("Error!! Enter marks again:");
                askStudentMarks(nameS);
                
            }else {
                students.push({nameS, marks, grade:studentMarks(marks)});
                askStudentName();
            }
        })
    }
    askStudentName();

}
studentGrades();