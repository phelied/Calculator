import * as React from 'react';
import { makeStyles } from '@mui/styles';
import './utilities.css';
import Button from '@mui/material/Button';


const rows = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];

const Demo = ({ results }) => (
    <div className="background-calculator">
        <div className="results">p</div>
        {results.length > 0 && (
            Array.from({ length: Math.ceil(results.length / 4) }, (_, i) => (
                <div className="row" key={`row${i}`}>

                    {
                        results.slice(i * 4, (i + 1) * 4)
                            .map((number) => (
                                <button className="background-button" key={number}>{number}</button>
                            ))
                    }
                </div>
            ))
        )}
    </div>
)

export default function StylingCellsGrid() {
    return (
        <div className="center">
            <Demo results={rows} />
        </div>
    );
}
