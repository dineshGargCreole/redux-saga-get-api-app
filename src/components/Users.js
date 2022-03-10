import React from 'react'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {loadUsers} from '../actions'

function Users(props) {
  // useEffect(async () => {
  //     props.loadUsers();
  // },[])

  console.log('props', props)
  return (
    <div>
      <>
        <h3>Users</h3>
        <button onClick={props.loadUsers}>click</button>
      </>
    </div>
  )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(loadUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)