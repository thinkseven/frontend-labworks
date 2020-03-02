
import React from 'react'
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import Visualizer from './components/Visualizer'
import pkg from '../package.json'

const App = () => {
    return (
        <div>
            <div>
                <JSONInput
                    id='a_unique_id'
                    placeholder={pkg}
                    colors={{
                        string: "#DAA520" // overrides theme colors with whatever color value you want
                    }}
                    locale={locale}
                    height='550px'
                />
            </div>
            <div>
                <Visualizer src={pkg}></Visualizer>
            </div>
        </div>
    )
}

export default App;