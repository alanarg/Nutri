import React, { useState } from 'react';
import TextField2 from '@material-ui/core/TextField';
import TextField3 from '@material-ui/core/TextField';
import TextField4 from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Pratos from './pratos.jpg';
import './css.css';
import Logar from './Google_Face/index';
import api from '../../services/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: Pratos,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




const SignIn = ({ history }) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/session', {
      email: email,
      password: password
    }).then(res => {

      if (res.data.token !== '') {
        history.push(`/grupos/${res.data.token}`);

      }





    });






  }
  function handleAssign(e) {
    e.preventDefault();
  }



  return <React.Fragment>
    <div class="bg">
      <Grid container component="main" className={classes.root} class="la">
        <CssBaseline />
        <Grid item xs={false} sm={2} md={4} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar class="perfil">
              <img src="./logoapp.jpg" width="100%"></img>
            </Avatar>
            <Typography component="h1" variant="h5">
              Entrar
          </Typography>
            <div >
              
              <form  onSubmit={handleSubmit}>
                <h3 align="center">E-mail</h3>
          <input value={email} class="input" onChange={e => setEmail(e.target.value)} />
          <br></br>
                <h3 align="center" >Senha</h3>
          <input value={password} type="password" class="input" onChange={e => setPassword(e.target.value)} />
              <b></b>
                <button type="submit" class="b">Logar</button>


                <Box mt={5}>  </Box>
              </form>
            </div>
           
              <div >
              <form onSubimit={handleAssign}>
              <Typography component="h1" variant="h5">
                Cadastrar
          </Typography>

                  <h3 align="center">Nome</h3> 
                <input class="input1" value={email} onChange={e => setEmail(e.target.value)} />
                  <br></br>
                  <h3 align="center">E-mail</h3> 
          <input class="input2" value={email} onChange={e => setEmail(e.target.value)} />
          <br></br>
                  <h3 align="center">Senha</h3>
          <input class="input3" value={password} type="password" onChange={e => setPassword(e.target.value)} />

              <br></br>
                  <button type="submit" class="b">Logar</button>
                </form>
                <Logar />
              </div>
              </div>
              
        </Grid>
        </Grid>
        
    </div>
  </React.Fragment>

      }
      
  export default SignIn;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  