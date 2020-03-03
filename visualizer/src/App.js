
import React, { Component } from 'react'
import JSONInput from 'react-json-editor-ajrm';
import Visualizer from './components/Visualizer'
import pkg from '../package.json'
import './App.scss'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>

                </div>
                <div>
                    <JSONInput
                        id='a_unique_id'
                        placeholder={pkg}
                        height='100%'
                        width='100%'
                    />
                </div>
                <div>
                    <Visualizer src={pkg}></Visualizer>
                </div>
            </div>
        )
    }
}


export default App;