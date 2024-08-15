import { useState } from "react";
import './App.css';
import Box from "./component/Box"

// 1.Two boxes (Title, Photo, Result)
// 2.There are buttons rock,scissors,paper
// 3.You can check the result by clicking one of these buttons
// 4.The computer's choice is determined randomly
// 5.Result of 3 & 4, you can recognize who is winner and loser 
// 6.The border color of boxes changes according to the result (Winner-Green, Loser-Red, Tie-Black)
// 컴퓨터결과+결과에 따른 테두리 바꾸기
const choice = {
  rock:{
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.schooldepot.co.nz/cdn/shop/products/Warwick-School-Scissors-5-inch-127mm-Graduated.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult]=useState("");
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };
  const judgement = (user,computer) => {
    console.log("user", user, "computer", computer);

    // user === computer tie
    // user === rock, computer === "scissors" user win
    // user === rock, computer === "paper" user lose
    // user === scissor, computer === "paper" user win
    // user === scissor, computer === "rock" user lose
    // user === paper, computer === "rock" user win
    // user === paper, computer === "scissors" user lose

    if (user.name === computer.name ) {
      return "tie"
    }else if (user.name === "Rock") return computer.name === "Scissors"?"win":"lose"
   else if(user.name === "Scissors")return computer.name === "Paper"?"win":"lose"
   else if (user.name === "Paper")return computer.name === "Rock"?"win":"lose"
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    console.log("itemArray",itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className ="main">
        <Box title="You" choice={choice.rock} item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
