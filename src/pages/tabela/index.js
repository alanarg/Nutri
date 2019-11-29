import React, {useState, useEffect} from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
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
import {connect} from 'react-redux';
import Grups from '../grupos/index';

require('./styles.css');
const ref = {}
const cafe = [{}];

 

 const MaterialTableDemo = (props)=> {
  const a = props.a;
  const [file, setFile] = useState([0]);
  const toggleAlimento=(food)=>{
    return  <Grups prop={food}/>;
     
    
  }

  function handleChange(event) {

    setFile({
      file: URL.createObjectURL(event.target.files[0]),
      
    }, [file])
  }
  if(typeof file.file !== 'undefined'){
    var i = file.file;
  }
  
  
  const [state, setState] = useState({
    columns: [
      { title: 'Alimento', field: 'alimento' },
      { title: 'Descrição', field: 'descricao' },
      { title: 'Descrição', field: 'image' },

      { title: 'Quantidade Colher de soupa', field: 'colher', type: 'numeric' },
      {title: 'Quantidade Concha', field:'concha', type:'numeric'},
      {title: 'Quantidade Copos', field:'copo', type:'numeric'},

      {
        title: 'Modo de preparo',
        field: 'modo',
        lookup: { cozido: 'Cozido', frito: 'Frito', assado:'Assado', cru:'Cru', liq:'líquido' },
      },
      {
        title: 'Perfil',
        field: 'perfil',
        lookup: { cafe: 'Café da Manhã', almoço: 'Almoço', lanche:'Lanche', jantar:'Jantar'},
      },
    ],
    data: [
      { alimento: a, descricao: 'Baran', birthYear: 1987, birthCity: 63, image:i },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

 

  return (
    <>
    {/* <Upload/> */}
    <div>  <input type="file" onChange={handleChange}/>
        <img src={file.file} class="image"/>
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
      Add : Add,
      Edit : Create,
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
     <Button class="b" onClick={()=>toggleAlimento(state.data)}>SALVAR E INGERIR</Button>
    <Button class="b">SALVAR </Button>
    </>
  );
}
export default  connect() (MaterialTableDemo)

// const Upload = () =>{
//     const [file, setFile] = useState([0]);
    
//   function handleChange(event) {
//     setFile({
//       file: URL.createObjectURL(event.target.files[0]),
      
//     })
//   }
  
//     return (
//       <div>
//         <input type="file" onChange={handleChange}/>
//         <img src={file.file} class="image"/>
//         {console.log(file.file)}
//       </div>
//     );
  
// }