import React from 'react'
import { connect } from 'react-redux'

const Component2Child = (props) => {
  return (
    <div className='component2-child'>
      <h3>Component2Child</h3>
      <button onClick={()=>{
        props.dispatch({type: 'CHANGE_BACKGROUND'})}}>Change Background</button>
    </div>
  )
}

const mapStateProps = (state)=>{
  return {
    bgColor: state.bgColor
  } 
  
}



export default connect(mapStateProps)(Component2Child)
