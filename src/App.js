import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"

// 1.Two boxes (Title, Photo, Result)
// 2.There are buttons rock,scissors,paper
// 3.You can check the result by clicking one of these buttons
// 4.The computer's choice is determined randomly
// 5.Result of 3 & 4, you can recognize who is winner and loser 
// 6.The border color of boxes changes according to the result (Winner-Green, Loser-Red, Tie-Black)
const choice = {
  rock:{
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissor:{
    name:"Scissors",
    img:"https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/1/_/1_41_5.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {
  return (
    <div>
      <div className ="main">
        <Box title="You"/>
        <Box title="Computer" />
      </div>
      <div className="main">
        <button>Scissors</button>
        <button>Rock</button>
        <button>Paper</button>
      </div>
    </div>
  );
}

export default App;
