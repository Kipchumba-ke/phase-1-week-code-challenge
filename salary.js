//Monthly Taxable Pay (Ksh)	Annual Taxable Pay (Ksh)	Rate of Tax (%)
//Up to 24,000	Up to 288,000	10.0
//24,001 - 32,333	288,001 - 388,000	25.0
//32,334 - 500,000	388,001 - 6,000,000	30.0
//500,001 - 800,000	6,000,001 - 9,600,000	32.5
//Above 800,000	Above 9,600,000	35.0

const readline = require (`readline`);

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function salaryRange(){
    
    //function payeSalary(){
        rl.question(`Enter gross salary:`, function(salary){
            const shif = 0.0275 * salary
            
            const housing = 0.015 * salary;
            
            if (isNaN(salary) || salary < 0 ){
                console.log(`Invalid!! Enter gross salary again:`);
                payeSalary(salary);
    
            } else {
                if (salary <= 24000){
                    console.log(salary - ((0.1 * salary + shif + housing)));
                }else if (salary >= 24001 && salary <= 32333){
                    console.log(salary - ((0.25 * salary) + shif + housing));
                }else if (salary >= 32334 && salary <= 500000){
                    console.log(salary - ((0.30 * salary) + shif + housing));
                }else if ( salary >= 500001 && salary <= 800000){
                    console.log(salary - ((0.325 * salary) + shif + housing));
                }else {
                    console.log(salary - ((0.35 * salary) + shif + housing));
                }
                rl.close();
           
            }
        });
        
        //payeSalary();
            
            
    //}
//    function nssfContributions(nssf){
//        if (salary <= 18000 && salary >=0){
  //          return 
  //      }
    //}
}
salaryRange();

