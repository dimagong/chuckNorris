import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   '& > *': {
  //     marginTop: theme.spacing(3),
  //   },
  // },
  root: {
    marginTop: theme.spacing(3),
    background: 'linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)',
    borderRadius: 10,
    width: 152,
    height: 40,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: '22px',
    color: '#FFFFFF',
    textTransform:'none',
  },
}));

 const ButtonGetJoke = ({onButtonSwith}) => {
    const classes = useStyles();

    // const getTarget = (event)=>{
    //   console.log('eventButtonGetJoke', event.target)
    // }
  
    return (
        <Button 
          classes={{root: classes.root}}  
          variant="outlined" 
          onClick={onButtonSwith}
          >
          Get a joke
        </Button>
    );
  }

  export default ButtonGetJoke
