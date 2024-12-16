import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, setArr]=useState(["no moves"]);

  let updateBlue = () => {
    // console.log(`moves.blue = ${moves.blue}`);
    // setMoves((preMoves) => {
    //   return { ...preMoves, blue: (preMoves.blue += 1) };
    // });

    setArr((prevArr)=>{
              return [ ...preMoves, "blue moves"] ;

    });
    console.log(arr);
  };

  let updateYellow = () => {
    // console.log(`moves.yellow = ${moves.yellow}`);
    setMoves((preMoves) => {
      return { ...preMoves, yellow: (preMoves.yellow += 1) };
    });
  };
  let updateGreen = () => {
    // console.log(`moves.green = ${moves.green}`);
    setMoves((preMoves) => {
      return { ...preMoves, green: (preMoves.green += 1) };
    });
  };
  let updateRed = () => {
    // console.log(`moves.red = ${moves.red}`);
    setMoves((preMoves) => {
      return { ...preMoves, red: (preMoves.red += 1) };
    });
  };
  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves ={moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves ={moves.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves ={moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves ={moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}