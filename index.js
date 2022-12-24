const BUY_CAKE = 'BUY_CAKE'


//action
{
    type : BUY_CAKE,
    info : 'First rdux Action'
}


//action creator
function buyCake(){
    return{
        type : BUY_CAKE,
        infor : 'First redux action'
    }
}