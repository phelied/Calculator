import * as React from 'react';
import { makeStyles } from '@mui/styles';
import './utilities.css';
import Button from '@mui/material/Button';


const rows = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];

const useStyles = makeStyles({
    root: {
        '& .super-app-theme--cell': {
            backgroundColor: 'rgba(224, 183, 60, 0.55)',
            color: '#1a3e72',
            fontWeight: '900',
        },
    },
});

const Demo = ({ results}) => (
    <div>
        {results.length > 0 && (
            Array.from({ length: Math.ceil(results.length / 4) }, (_, i) => (
                <div className="row" key={`row${i}`}>
                    {
                        results.slice(i * 4, (i + 1) * 4)
                            .map((number) => (
                                <Button className="card" key={number}>{number}</Button>
                            ))
                    }
                </div>
            ))
        )}
    </div>
)

export default function StylingCellsGrid() {
    const classes = useStyles();
    return (
        <div style={{ height: 200, width: '100%' }} className={classes.root}>
                <Demo results={rows} />
        </div>
    );
}
