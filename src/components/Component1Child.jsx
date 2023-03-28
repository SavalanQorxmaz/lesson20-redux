import React from 'react'
import { connect } from 'react-redux';

const Component1Child = (props) => {
  return (
    <div className='component1-child'>
      <h3>Component1Child</h3>

      <button onClick={()=>{
        props.dispatch({
          type:'INCREMENT'
        })
      }}>Increment</button>
      <button onClick={()=>{
        props.dispatch({
          type: 'DECREMENT'
        })
      }}>Decrement</button>
    </div>
  )
}
function mapStateProps(state) {
  return {
    count: state.count
  }}

export default connect(mapStateProps)(Component1Child) 