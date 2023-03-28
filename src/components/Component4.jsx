import React from 'react'
import { connect } from 'react-redux'
import Component4Child from './Component4Child'

const Component4 = (props) => {
  return (
    <div className='component4'>
      <h2>Component4</h2>

      
      <p>New Count:  <span>{props.count}</span></p>
      <Component4Child/>
    </div>
  )
}

function mapStateProps(state) {
  return { 
    count: state.count
    
  }
}

 

export default  connect(mapStateProps)(Component4)