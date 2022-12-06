import React, {useState} from 'react';
import './Tictactoe.css';

export const Tictactoe = () => {
    //set turns
    const [turn, setTurn] = useState('x');
    //set cells
    const [cells, setCells] = useState(Array(9).fill(''));
    //winner state
    const [winner, setWinner] = useState('');

    //handle restart
    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(''))
    }
    //winning logic
    const checkForWinner = (squares) => {
        //for diff winning techs, we need combos
        let combos = {
            across: [[0,1,2],[3,4,5],[6,7,8]],
            down: [[0,3,6],[1,4,7],[2,5,8]],
            diagnol: [[0,4,8],[2,4,6]]
        }

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                //check if we have items in these suqares
                //check items at each position
                console.log(pattern)
                if(squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '')
                { //do nothing 
                }

                else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) 
                {
                    setWinner(squares[pattern[0]])
                }
            })
        }
    }
    const handleClick = (num) => {
        //to avoid double click
        if (cells[num] != '')
            {alert ('already clicked')
            return }
        //creating an empty array of cell size to maintain the clicked value
        let squares = [...cells];

        if (turn === 'x') 
        { 
            squares[num] = 'x'
            setTurn('o')
        }
        else {
            squares[num] = 'o'
            setTurn('x')
        }
        checkForWinner(squares)
        //remember what is clicked where
        setCells(squares)
        //just to check if its actually saving the clicked value
        console.log(squares)
    }

    const Cell = ({num}) => {
        //display the x and o
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }
    // console.log ('tic tac toe render')

    return (
        <div className='container'>
            
            <table>
            Turn : {turn}    
                <tbody>
                <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </tr>
                <tr>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </tr>
                <tr>
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </tr>
                </tbody>

            </table>
            {winner === '' ? <p>No one is the winner</p> : <p>{winner} is the winner</p>}        
            
            <button onClick={() => {handleRestart()}}>Reset</button>
        </div>
    )
}