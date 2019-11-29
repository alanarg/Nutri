import React, {useState} from 'react';
import { createStore} from 'redux';
import frango from "../refeicao/frango.jpg";
import Grups from "../grupos/index";




const INITIAL_STATE ={
    pratos:'',
    comidas : [
       
    ]

}

function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_ALIMENTO':
            return {...state,comidas:[...state.comidas,action.food]};
       
        default:
                return state;



    };

    

}
 
const store = createStore(reducer);

export default store;