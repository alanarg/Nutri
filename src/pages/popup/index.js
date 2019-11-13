import React from 'react';
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
import graos from '../alimentos/cereais';
import verde from '../alimentos/verduras';
import frutas from '../alimentos/frutas';
import gorduras from '../alimentos/gorduras';
import pescados from '../alimentos/pescados';
import carnes from '../alimentos/carnes';
import leite from '../alimentos/laticínios';
import bebidas from '../alimentos/bebidas';
import ovos from '../alimentos/ovos';
import candys from '../alimentos/doces';
import misce from '../alimentos/miscelaneas';
import industri from '../alimentos/industry';
import prep from '../alimentos/preparados';
import legumes from '../alimentos/legumes';
import nozes from '../alimentos/nozes';
import Slide from '@material-ui/core/Slide';
import Alimentos from '../main';
import Chart from '../maingraph/index'
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
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
  
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const id_alimento = props.id;
  const [open, setOpen] = React.useState(false);
  const total = props.carbohydrates+props.protein+props.gorduras;
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // const { protein, carbohydrate, fiber } = props.atributo;

  return (
    <div>
      <Button variant="outlined" color={classes.color} onClick={handleClickOpen}>
        Descrição
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.color}>
          <Toolbar className={classes.color} >
            <IconButton edge="start"  onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              {props.alimento}
              
                
              
            </Typography>
            <Button  className={classes.color} onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="{props.proteina}"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
                shuahs
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
         <Chart atributos={props.carboidratos} />
      </Dialog>
    </div>
  );
}

