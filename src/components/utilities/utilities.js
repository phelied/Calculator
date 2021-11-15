import React, { useState } from 'react';
import './utilities.css';

const rows = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];

function Demo({ results }) {

    return (
        <div className="background-calculator">
            <div className="results">0</div>
            {results.length > 0 && (
                Array.from({ length: Math.ceil(results.length / 4) }, (_, i) => (
                    <div className="row" key={`row${i}`}>
                        {
                            results.slice(i * 4, (i + 1) * 4)
                                .map((character) => (
                                    <button style = {{ backgroundColor : character == "=" ? '#8ab4f9' : ''}} className="background-button" key={character}> {character} </button>
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
