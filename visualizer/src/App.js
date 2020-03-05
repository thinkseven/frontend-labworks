
import React, { Component } from 'react'
import Visualizer from './components/Visualizer'
import 'normalize.css'
import './App.css'

class App extends Component {

    state = {
        jsonInput: {}
    }

    render() {
        return (
            <div className="wrapper">
                <div className="item-input">
                    <textarea className="txtArea" onPaste={(event) => {
                        let paste = (event.clipboardData || window.clipboardData).getData('text');
                        this.setState({
                            jsonInput: JSON.parse(paste)
                        })
                    }} onChange={(event) => {
                        let newJson = JSON.parse(event.target.value);
                        this.setState({
                            jsonInput: newJson
                        })
                    }}>
                    </textarea>
                </div>
                <div className="item-display">
                    <Visualizer src={this.state.jsonInput}></Visualizer>
                </div>
            </div>
        )
    }
}


export default App;