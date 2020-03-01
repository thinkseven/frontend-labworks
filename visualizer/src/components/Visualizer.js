
import React from 'react'
import './Visualizer.scss'

const Visualizer = (input) => {
    return (
        <div className="container">
            <pre>{JSON.stringify(input, null, 2)}</pre>
        </div>
    )
}

export default Visualizer;