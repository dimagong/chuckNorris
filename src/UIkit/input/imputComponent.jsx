import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            width: '78%',
        },
    },
    input: {
        height: 42,
        border: '2px solid #333333',
        boxSizing: 'border-box',
        borderRadius: 10,
        color: '#333333',
        fontSize: 16,
        lineHeight: 22,
        paddingLeft: 15,
    },

}));

const ImputComponent = ({ valueImput, radioRequest }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            { (radioRequest === 'search') ? 
                <Input className={classes.input} 
                    id="component-error" 
                    disableUnderline='true' 
                    placeholder='Free text search...' 
                    onChange={valueImput}
                /> 
            :
            ''
            }
        </form>
    );
}

export default ImputComponent