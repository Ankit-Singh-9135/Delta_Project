import { useState } from "react";
import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n=3 , winningSum=15}){
    let [ticket ,setticket]=useState(genTicket(n));
    let isWinning = sum(ticket)===winningSum;

let buyTicket=()=>{
    setticket(genTicket(n));
};
    return (
        <div>
            <h1>Lottery Game! </h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> */}
            <Ticket ticket={ticket} />
            <br></br>
            <button onClick={buyTicket}>Buy New ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}