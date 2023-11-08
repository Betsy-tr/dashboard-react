import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Private from './pages/Private/Index'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '../firebase'
import { initUser, resetUser } from './redux/userStore'


const App = () => {

  const dispatch = useDispatch() ; 

  const userID = useSelector(state => state.user)

  onAuthStateChanged(auth , user =>{

    if (user) {

      dispatch(initUser(user.uid))

    }else{

      dispatch(resetUser())

    }
  })

  return (

    <>

      {userID ? <Private/> : <Public/>}
    
    </>

  )
}

export default App

