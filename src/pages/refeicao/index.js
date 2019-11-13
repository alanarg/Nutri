import React from 'react';
import Full from '../editfood/index';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import frango from "./frango.jpg";
import carneverm from "./carneverm.jpg";
import List from '@material-ui/core/List';
import Header from '../Headpop/index';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import foto from "./addphoto.jpg";


import Expand from '@material-ui/icons/ExpandMoreSharp';
import FullScreenDialog from '../popup';
import { borderColor } from '@material-ui/system';


const pratos = [

  {
    "id": 1, "imageingest": frango, "title": "tradicional 1", "descript":["Arroz","Alface","Feijão","Batata frita"]
      

    
  },

];

const styles = theme => ({
  color: {
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',

  },
  root: {
    margin: 0,
    padding: theme.spacing(2),

  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[111],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  color: {
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',

  },
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const useStyles = makeStyles(theme => ({

  root: {
    width: "5000px"
  },
  color: {
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',

  },
  imagens: {
    borderRadius: "20px",
    width: "100px",
    height: "100px",
    borderColor: "yellow"
  }

}));


const CustomizedDialogs = (props) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <Button variant="contained" className={classes.color} onClick={handleClickOpen}>
        INGERIR
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Header />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>

          <i>INGESTÃO</i>
        </DialogTitle>
        <List>

          <ListItem button>
            <img src={foto} className={classes.imagens} />
            <ListItemText primary="Adicionar novo" />
            <Full className={classes.color} />
          </ListItem>
          <Divider />
          <a name="refeição"></a>
          {pratos.map(prato => (
            <ListItem button>
              <img src={prato.imageingest} className={classes.imagens} />

              <ListItemText primary="         " />
              <ListItemText>
                <h1>{prato.title}</h1>
                <p>{prato.descript}</p>
              </ListItemText>
              <Full />
              <Divider />
            </ListItem>




          ))
          }
          <a name="#cafe"></a>
          <DialogTitle >

            <i>Cafe</i>
          </DialogTitle>
          {pratos.map(prato => (
            <ListItem button>
              <img src={prato.imageingest} className={classes.imagens} />

              <ListItemText primary="         " />
              <ListItemText>
                {/* <h1>{prato.title}</h1> */}
                {/* <p>{prato.descript}</p> */}
              </ListItemText>
              <Full nome={prato.title} />
              <Divider />
            </ListItem>




          ))
          }
        </List>



        <Button onClick={handleClose} color="primary">
          REGISTRAR
          </Button>
      </Dialog>
    </React.Fragment>



  )
}


export default CustomizedDialogs;









