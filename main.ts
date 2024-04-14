#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000; //dollars
let myPin = 7890;
let pinAnswer = await inquirer.prompt([
  {
    name: "code",
    message: "Please Enter Your Pin",
    type: "number",
  },
]);
//console.log(pinAnswer.code);

//main if
if (pinAnswer.code === myPin) {
  console.log("correct pin code!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: [
        " Cash 1000",
        "Cash 2000",
        "Cash 5000",
        "Cash 10000",
        "withdrawl",
        "Check your Balance",
      ],
    },
  ]);
   // nested if in main if starts here
  if (operationAns.operation === "withdrawl") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
      },
    ]);


    // another if in nested if(1)
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance.");
    } else {
      myBalance -= amountAns.amount;
      console.log(`your remaining balance is: ${myBalance}`);
    }
    //another if in nested if ends


  } else if (operationAns.operation === "Cash 1000") {
    myBalance -= 1000;
    console.log(`Your Remaining Balancce Is ${myBalance}`);
  } else if (operationAns.operation === "Cash 2000") {
    myBalance -= 2000;
    console.log(`Your Remaining Balancce Is ${myBalance}`);
  } else if (operationAns.operation === "Cash 5000") {
    myBalance -= 5000;
    console.log(`Your Remaining Balancce Is ${myBalance}`);
  } else if (operationAns.operation === "Cash 10000") {
    myBalance -= 10000;
    console.log(`Your Remaining Balancce Is ${myBalance}`);
  } else if (operationAns.operation === "Check your Balance") {
    console.log(`your balance is: ${myBalance}`);
  } 
// nested if  end here!

} else {
  console.log("invalid pin number! Please re-enter valid pin");
}
// now end main if