import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {useDispatch} from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/pairs';



const Perfil = (props)=>{
    dispatch({type:"ADD_PERFIL",perfil:{nome:props.atrib.name, email: props.atrib.email, imagem:props.atrib.picture}});
    const email = props.atrib.email;
    const image = props.atrib.picture;
    return <>
        <Container>
            <Paper>
                <div>
                    <img src={image}></img>
                    <h1>{email}</h1>
                </div>
            </Paper>
        </Container>
    </>
}

export default Perfil;