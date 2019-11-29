import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import prot from './img/proteina.svg';
import gordura from './img/gorduras.png';
import fibra from './img/fibra.jpg';
import ener from './img/energia.png';
import carbo from './img/carbo.png';
import Slide from '@material-ui/core/Slide';
import Alimentos from '../main';
import Chart from '../maingraph/index';
import Edit from '../editfood/index';

import './styles.css';

const useStyles = makeStyles(theme => ({
  color:{
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',

  },

  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: 'dark'
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
  
});

export default function FullScreenDialog(props) {


    
  // const [proteinas, setProt] = useState[0];
  // let carbo = props.atributos.carbohydrate.qty; 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  function handleClickOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
  }
   
  

    if(typeof props.atributos.protein === 'undefined'){
      var proteinas = 0;
    }else{
      var proteinas = Object.values(props.atributos.protein);

    }
    if(typeof props.atributos.carbohydrate === 'undefined' ){
      var carboidratos = 0;
      

    }else{
    
      var carboidratos = Object.values(props.atributos.carbohydrate);

    }if(typeof props.atributos.lipid === 'undefined' ){
      var gorduras = 0;
      

    }else{
    
      var gorduras = Object.values(props.atributos.lipid);

    }if(typeof props.atributos.fiber === 'undefined' ){
      var fibras = 0;
      

    }else{
    
      var fibras = Object.values(props.atributos.fiber);

    }if(typeof props.atributos.energy === 'undefined' ){
      var energia = 0;
      

    }else{
    
      var energia = Object.values(props.atributos.energy);

    }
    const id_alimento = props.id;
   
    // const atributos = this.props.atributos.attributes;
    // console.log(atributos);   
    return(
    
    <div>
      <Button variant="outlined" color={classes.color} onClick={handleClickOpen}>
        Descrição
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        {/* {alert(proteinas)} */}

        {console.log(props.atributos.lipid)}

        {console.log( props.atributos.fiber)}

          {console.log( props.atributos.energy)} 
        <AppBar className={classes.color}>
          <Toolbar className={classes.color} >
            <IconButton edge="start"  onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              {props.alimento}
              
                
              
            </Typography>
            <Edit  className={classes.color} onClick={handleClose} ali={props.alimento} >
             
            </Edit>
          </Toolbar>
        </AppBar>
        <List className={classes.root}>
          
      <ListItem alignItems="center">
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="icone prot" src={prot} />
        </ListItemAvatar>
        <ListItemText
          primary="Proteínas"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {'Proteínas a cem gramas'}
            </React.Fragment>
          }
        />
        
          {proteinas}

      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={carbo} />
        </ListItemAvatar>
        <ListItemText
          primary="Carboidratos"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {'Carboidratos a cem gramas'}
            </React.Fragment>
          }
        />
          {carboidratos}
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={gordura} />
        </ListItemAvatar>
        <ListItemText
          primary="Gorduras"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {'Gorduras a cem gramas'}
            </React.Fragment>
          }
        />
                {gorduras}

      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={ener} />
        </ListItemAvatar>
        <ListItemText
          primary="Energia"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {' A cem gramas'}
            </React.Fragment>
          }
        />
                <div>{energia[0]}kcal</div>
             

      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={fibra} />
        </ListItemAvatar>
        <ListItemText
          primary="Fibras"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {'Fibras a cem gramas'}
            </React.Fragment>
          }
        />
        {fibras}

      </ListItem>
      <Divider variant="inset" component="li" />

    </List>
         <Chart  carboidratos={carboidratos}  proteinas={proteinas} gorduras={gorduras} />
      </Dialog>
    </div>
    )
  
}

