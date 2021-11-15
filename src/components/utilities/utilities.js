import React, { useState } from 'react';
import './utilities.css';

const rows = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];



function Demo({ results }) {
    const [stringData, setStringData] = useState("");
    const [number, setNumber] = useState("0");
    const handleClick = (e) => {
        console.log(e.target.value);
        if (!isNaN(e.target.value)) {
            setNumber(e.target.value);
        }
        switch (e.target.value) {
            case 'AC':
                setStringData("");
                break;
            case '=':
                setNumber(eval(stringData));
                break;
            default:
                setStringData(stringData + e.target.value);
        }
    }

    return (
        <div className="background-calculator">
            <div className="results">{number}</div>
            {results.length > 0 && (
                Array.from({ length: Math.ceil(results.length / 4) }, (_, i) => (
                    <div className="row" key={`row${i}`}>
                        {
                            results.slice(i * 4, (i + 1) * 4)
                                .map((character) => (
                                    <button style={{ backgroundColor: character === "=" ? '#8ab4f9' : '' }} className="background-button" value={character === "x" ? '*' : character} key={character} onClick={handleClick}> {character} </button>
                                ))
                        }
                    </div>
                ))
            )}
        </div>
    );
}

export default function StylingCellsGrid() {
    return (
        <div className="center">
            <Demo results={rows} />
        </div>
    );
}
