
import React from 'react'
import './App.scss'

const App = (input) => {
    return (
        <div className="container">
            <pre>{JSON.stringify(input, null, 2)}</pre>
        </div>
    )
}

export default App;