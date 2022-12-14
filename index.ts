#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';


const sleep=() => new Promise((resolve, reject) =>  setTimeout(resolve, 2000))
async function title(){
    let animation=chalkAnimation.rainbow('Number Guessing Game');  
await sleep()
animation.stop();

}
await title();
async function askQuestion() {
  let random:number=Math.ceil(Math.random()*10+1)
  console.log("Guess a number between 1 - 10");
  let points=0;
  let playerLife=4;
  console.log(`You have ${chalk.bgRed(4)} life`);
   do{
    
    var ask=await inquirer
    .prompt([
      {
          type:"number",
          name:"guesNumber", 
          message: "Enter your number",
          validate:(answer:number)=>{
if(isNaN(answer) || answer>10 || answer<1){
return chalk.bgRedBright('Please enter a valid number !!')
}
return true;
          }
      }
    ]);
    if(ask.guesNumber===random){
      points=points+10;
      console.log(chalk.greenBright(`You guess the right number  ${chalk.bgBlue(points)} points`))
      playerLife=playerLife+1;
      random=Math.ceil(Math.random()*10+1);
      console.log(`Life left ${chalk.bgRed(playerLife)}`);
    }else if(ask.guesNumber<random){
      console.log(chalk.red("Guess a higher number"))
      playerLife--;
      console.log(`Life left ${chalk.bgRed(playerLife)}`);
    }else if(ask.guesNumber>random){
      console.log(chalk.red("Guess a lower number"))
      playerLife--;
      console.log(`Life left ${chalk.bgRed(playerLife)}`);
    }
   }while(playerLife>=1 )
   console.log(chalk.redBright("Game Over !!"));
   console.log(chalk.yellowBright(`Hurrahh !!!  You score  ${points} points`));
}
async function startAgain() {
  do{
    await askQuestion();
    var restart=await inquirer.prompt([
      {
        type:"input",
        name:"start_again",
        message:"Restart the Game? Press Y or N: "
      }
    ]);
  
  }while(restart.start_again==="Y" || restart.start_again==="y" )
}

startAgain();


