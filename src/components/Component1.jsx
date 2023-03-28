import React from 'react'
import { connect } from 'react-redux'
import Component1Child from './Component1Child'

const Component1 = (props) => {
  
  return (
    <div className='component1' style={{backgroundColor: `${props.bgColor}`}}>
      <h2 >Component1</h2>

      <Component1Child/>


    </div>
  )
}

const mapStateProps = (state)=>{
  return {
    bgColor: state.bgColor
  }
}



export default connect(mapStateProps)(Component1)