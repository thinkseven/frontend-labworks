
import React, { ReactFragment } from 'react'
import './Visualizer.css'

const Visualizer = (input) => {
    return (
        <React.Fragment>
            <pre>{JSON.stringify(input, null, 2)}</pre>
        </React.Fragment>
    )
}

export default Visualizer;