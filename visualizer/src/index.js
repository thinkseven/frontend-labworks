import React from 'react'
import ReactDOM from 'react-dom'
import Visualizer from './components/Visualizer'

pm.getData((error, response) => {
    ReactDOM.render(<Visualizer input={response} />, document.getElementById("root"))
})