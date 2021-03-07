import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MaterialUIStyled from './CustomButton';

// Hooks形式
const useStyles = makeStyles({
  button: {
    backgroundColor: 'green'
  }
});

const a = MaterialUIStyled();
console.log(a)

function App() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Button variant="contained" className={classes.button}>
          Hooks式
        </Button>
      </div>
      <div>
        <MaterialUIStyled></MaterialUIStyled>
      </div>
    </>
  );
}

export default App;
