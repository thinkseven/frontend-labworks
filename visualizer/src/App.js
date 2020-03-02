
import React from 'react'
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Visualizer from './components/Visualizer'
import pkg from '../package.json'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Button variant="contained" click={}>Refresh Visualizer</Button>
                </Grid>
                <Grid item xs>
                    <JSONInput
                        id='a_unique_id'
                        placeholder={pkg}
                        colors={{
                            string: "#DAA520" // overrides theme colors with whatever color value you want
                        }}
                        locale={locale}
                        height='100%'
                        width='100%'
                    />
                </Grid>
                <Grid item xs>
                    <Visualizer src={pkg}></Visualizer>
                </Grid>
            </Grid>
        </div>
    )
}

export default App;