import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

pm.getData((error, response) => {
    ReactDOM.render(<App input={response} />, document.getElementById("root"))
})