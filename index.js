const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'


//action
// {
//     type : BUY_CAKE,
//     info : 'First rdux Action'
// }


//action creator
function buyCake(){
    return{
        type : BUY_CAKE,
        infor : 'First redux action'
    }
}

function buyIcecream(){
    return {
        type : BUY_ICECREAMS
    }
}

//reducers (previous, action) => newState

const initialState = {
    numOfCakes : 10, 
    numOfIceCreams : 20
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes-1
        }
        case BUY_ICECREAMS : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams-1
        }
        default : return state
    }
}



const store = createStore(reducer)
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('upated State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())
//console.log('Initial State', store.getState());
unsubscribe();