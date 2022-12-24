import { BUY_CAKE } from "./cakesTypes"

const intialState = {
    numOfCakes : 10
}

const cakeReducer = (state = intialState, action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes : state.numOfCakes-1
        }
        default : return state
    }
}

export default cakeReducer