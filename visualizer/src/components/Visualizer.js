
import React, { ReactFragment } from 'react'
import './Visualizer.css'

const Visualizer = (input) => {
    if (input.src == null || input.src.length === 0) {
        return (
            <React.Fragment>
                <span>
                    Waiting for the json input!!
                </span>
            </React.Fragment>
        )
    }

    // CHANGE HERE FOR REAL WORLD EXAMPLE

    /* Example 1
    if (input.src.devDependencies && input.src.devDependencies.length !== 0) {
        const dependencies = Object.keys(input.src.devDependencies);
        return (
            <React.Fragment>
                <ul>
                    {
                        dependencies.map((key) => {
                            return <li key={key}>{key} : {input.src.devDependencies[key]}</li>;
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
    */

    /* Example 2 
    console.log(input.src);
    if (input.src && input.src.length !== 0) {
        return (
            <React.Fragment>
                <ul>
                    {
                        input.src.map((item, index) => {
                            return <li key={index}>{item['ssh_url']}</li>
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
    */

    // CHANGE END HERE
    return (
        <React.Fragment>
            <span>
                Waiting for the object which match with the visualization condition!!
        </span>
        </React.Fragment>
    )
}

export default Visualizer;