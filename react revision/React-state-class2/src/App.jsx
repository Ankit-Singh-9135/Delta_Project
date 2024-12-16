
import './App.css'
// import LodoBoard from './LodoBoard'
import TodoList from './TodoList';
import Lottery from './Lottery';
// import Ticket from './Ticket';


function App() {

  return (
    <>
    {/* <LodoBoard/> */}
    {/* <TodoList/> */}
    <Lottery n={3} winningSum={15} />
    {/* <Ticket ticket ={[0,1,2]}/>
    <Ticket ticket ={[3,5,6]}/>
    <Ticket ticket ={[4,7,2]}/> */}

    


    </>
  )
}

export default App
