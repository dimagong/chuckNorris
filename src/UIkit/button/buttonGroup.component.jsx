import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  button: {
    backgroundColor: '#F8F8F8',
    color: '#ABABAB',
    letterSpacing: 2,
    textTransform: "uppercase",

    '&:focus': {
      backgroundColor: '#E5E5E5',
      color: '#333333',
      letterSpacing: 2,
      textTransform: "uppercase",
    },
  },
}));

const ButtonGroupComponent = ({valueButton}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
        variant="outlined" 
        size="small" 
        className={classes.button} 
        value='animal'
        onClick={valueButton}
      >
        animal
      </Button>
      <Button variant="outlined" size="small" className={classes.button} value='career' onClick={valueButton}
      >
        career
      </Button>
      <Button variant="outlined" size="small" className={classes.button} value='celebrity' onClick={valueButton}
      >
        celebrity
      </Button>
      <Button variant="outlined" size="small" className={classes.button} value='dev' onClick={valueButton}
      >
        dev
      </Button>
    </div>
  );
}

export default ButtonGroupComponent