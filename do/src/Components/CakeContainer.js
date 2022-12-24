import React from 'react'
import { buyCake } from '../redux'

const CakeContainer = () => {
  return (
    <div>
        <h2>Number of Cakes</h2>
        <button>Buy Cakes</button>
    </div>
  )
}


const mapStateToProps = state => {
  return{
    numberOfCakes : state.numberOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyCake : () => dispatch(buyCake)
  }
}

export default CakeContainer
