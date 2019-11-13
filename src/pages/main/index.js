
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
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
import api from "../../services/api";       
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Food from '@material-ui/icons/RestaurantMenuSharp';
import Add from '@material-ui/icons/Add';
import Expand from '@material-ui/icons/ExpandMoreSharp';
import CameraIcon from '@material-ui/icons/Restaurant';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FullScreenDialog from '../popup';
import Header from '../Header';
import './styles.css';








export default class Alimentos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alimentos: [],
            atrib : [{}]
            //ctrl+alt+shift seleciona uma coluna de linhas

        };

    }
      


    //Método executado assim que um componente é mostrado na tela;
    componentDidMount() {
       

        this.loadProducts();


    }

    //Quando utilizando métodos do react, podemos fazer a função como a de cima;
    //Quando nós criamos a função, devemos usar ARROW FUNCTIONS;
    //Em arrow function as chaves são fechadas com ponto e vírgula
    loadProducts = async () => {
        const { id } = this.props.match.params;
        // this.setState({ alimentos : this.graos})
        if(id == 1){
            this.setState({ alimentos : graos});
        }else if(id == 2){
            this.setState({ alimentos : verde });
        }else if(id == 3){
            this.setState({ alimentos : frutas});
        }else if(id == 4){
            this.setState({ alimentos : gorduras});
        }else if (id == 5){
            this.setState({ alimentos : pescados});
        }else if(id == 6){
            this.setState({ alimentos : carnes});

        }else if(id == 7){
            this.setState({ alimentos : leite});

        }else if(id == 8){
            this.setState({ alimentos : bebidas});

        }else if(id == 9){
            this.setState({ alimentos : ovos});

        }else if(id == 10){
            this.setState({ alimentos : candys});

        }else if(id == 11){
            this.setState({ alimentos : misce});

        }else if( id == 12){
            this.setState({ alimentos : industri});

        }else if( id ==13){
            this.setState({ alimentos : prep});

        }else if(id == 14){
            this.setState({ alimentos : legumes});

        }else if (id == 15){
            this.setState({ alimentos : nozes});

        }

        
        
        

        //Armazenando requisição do array de  grupos criado no state;
  
        

        


    };

    render() {
      const  descricao = (
            
            <React.Fragment>
                <Header />

                <div class="grupo-list" >
                    {
                        this.state.alimentos.map(alimento => (
                            <article key={alimento.id}>
                                <strong>{alimento.description}</strong>


                               
                                <Expand>
                                </Expand>
                                

                                <FullScreenDialog alimento={alimento.description}   id={alimento.id}/>   




                            </article>
                        ))
                    }
                </div>
                {/* Footer */}
                <footer >
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
            </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Desenvolvido por Alan Arguelho. Medalha Nutri intervenção de agenda nutriional!
            </Typography>

                </footer>
                {/* End footer */}

            </React.Fragment>
        );




        return (descricao);

        
    }
}







