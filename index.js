const BUY_CAKE = 'BUY_CAKE'


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


//reducers (previous, action) => newState

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes-1
        }
        default : return state
    }
}


