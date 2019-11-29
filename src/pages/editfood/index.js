import React, { useState } from 'react';
import $ from 'jquery';
import Input from 'react';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import Create from '@material-ui/icons/Create'
import Clear from '@material-ui/icons/Clear'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './style.css';
import colher from './img/colher.png';
import concha from './img/concha.png';
import copo from './img/copo.png';

import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  color: {
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  color: {
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

var p = "";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;

});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [titulo, setTitulo] = useState([]);
  const [open, setOpen] = React.useState(false);
  const a = props.ali;
  const [file, setFile] = useState([0]);
  const [alimentos, setAlimentos] = useState([0]);
  //redux
  const dispatch = useDispatch();

  //Funções do popup
  function handleClickOpen() {


    setOpen(true);
  }
  function handleClose(props) {
    //Função Date para explorar datas e horas
    var data = new Date();
    var dia = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2 = data.getYear();           // 2 dígitos
    var ano4 = data.getFullYear();       // 4 dígitos
    var hora = data.getHours();          // 0-23
    var min = data.getMinutes();        // 0-59
    var seg = data.getSeconds();        // 0-59
    var mseg = data.getMilliseconds();   // 0-999
    var tz = data.getTimezoneOffset(); // em minutos
    var hora = data.getHours();

    var str_data = dia + '/' + (mes+1) + '/' + ano4;
    var str_hora = hora + ':' + min;

    //Pegando todos os alimentos descritos
    let result = state.data.map(a => a.title);
    console.log(file.file);
    dispatch({ type: 'ADD_ALIMENTO', food: { image: file.file, hora: str_hora, data:str_data, title:titulo, descript: result } });


    setOpen(false);

  }
  //Funções Tabela
  function handleChange(event) {

    setFile({
      file: URL.createObjectURL(event.target.files[0]),

    });
  }
  if (typeof file.file !== 'undefined') {
    var i = file.file;
  }
  const [state, setState] = useState({
    columns: [
      { title: 'Alimento', field: 'title' },
      { title: 'Descrição', field: 'descricao' },
      { title: 'Quantidade Colher', field: 'colher', type: 'numeric' },
      { title: 'Quantidade Fatias', field: 'fatias', type: 'numeric' },
      { title: 'Quantidade Concha', field: 'concha', type: 'numeric' },
      { title: 'Quantidade Copos', field: 'copo', type: 'numeric' },

    
      {
        title: 'Modo de preparo',
        field: 'modo',
        lookup: { cozido: 'Cozido', frito: 'Frito', assado: 'Assado', cru: 'Cru', liq: 'líquido' },
      },
      {
        title:'Perfil',
        field:'perfil',
        lookup: { cafe: 'Café da Manhã', almoço: 'Almoço', lanche: 'Lanche', jantar: 'Jantar' },
      },
      {
        title:'Categoria',
        field:'cat',
        lookup: { cereal: 'Cereais e Derivados', verde: 'Verduras e Hortaliças', frutas: 'Frutas e Derivados', gorduras: 'Gorduras e Óleos',
      pescados:'Pescados e Frutos do Mar', carnes:'Carde e Derivados', leite:'Leite eDerivados', bebidas:'Bebidas e Derivados', ovo:'ovos', doces:'Produtos Açucarados', misce:'Miscelâneas', indus:'Alimentos industrializados',
    legumes:'Leguminosas', nozes:'Nozes e Sementes'},
      },
    ],
    data: [
      { title: a, descricao: '', image: file.file },

    ],
  });




  return (
    <div>
      <Button variant="outlined" color={classes.color} onClick={handleClickOpen}>
        Consumir
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.color}>
          <Toolbar className={classes.color} >
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              {props.name}
            </Typography>
            <Button autoFocus className={classes.color} onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <br></br>
        <br></br><br></br><br></br><br></br>
        {/* <Upload /> */}
        <body>

        </body>
        <div class="grid-container"> 
        <div align="center">
          <p class="t"><i>Nome Registro </i></p>
            <input type="text" class="input" placeholder="..." onChange={e => setTitulo(e.target.value)}></input>
            </div>
            <br></br>
            <div align="center">
          

          <img src={file.file} class="image" />
          </div>
          <br></br>
          <div align="center">
          <input class="input1" type="file" onChange={handleChange} />
          </div>
          
       
        </div>        
        
        <MaterialTable
          icons={{
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            Delete: Remove,
            Add: Add,
            Edit: Create,
            Clear: Clear
          }}
          title="Editar Porções"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />




      </Dialog>
    </div>
  );

}




