import React from 'react'
import { connect } from 'react-redux'


const Component4Child = (props) => {
 
  return (
    <div className='component4-child'>
      <h3>Component4Child</h3>

      <label htmlFor="newText"> New Text </label>
      <input onChange={(e)=>{
        props.dispatch({type: 'CHANGE_TEXT',
        text: e.target.value
      });
      }} id='newText' type="text" />
     
    </div>
  )
}


const mapStateProps = (state)=>{
  return {
    newValue: state.newValue
  }
}



export default connect(mapStateProps)(Component4Child)