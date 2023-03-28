import React from 'react'
import { connect } from 'react-redux'

const Component3Child = (props) => {

  return (
    <div className='component3-child'>
      <h3>Component3Child</h3>

      <p>{props.newValue}</p>
    </div>
  )
}

const mapStateProps = (state)=>{
  return {
   newValue: state.newValue
  }
}




export default connect(mapStateProps)(Component3Child) 