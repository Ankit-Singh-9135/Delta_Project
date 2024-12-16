
import './App.css'
import LodoBoard from './LodoBoard'
import TodoList from './TodoList';
import Lottery from './Lottery';
// import Ticket from './Ticket';
import { sum } from './helper';

function App() {

  let winCondition = (ticket)=>{
    return sum (ticket) === 15;
  }

  return (
    <>
     {/* <LodoBoard/> */}
     {/* <TodoList/> */}
     <Lottery n={3}winCondition={winCondition} />
     {/* <Ticket ticket={[0, 1, 2]}/>    */}
    </>
  );
}

export default App
