import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import store from './Store'
import { Squarecube } from './Squarecube'
import { Square ,Cube} from './Actions'

const App = () => {
  store.subscribe(()=>{console.log(store.getState())});
  let init=useSelector((store)=>store.Squarecube);
  let dispatch=useDispatch();
  return (
    <>
    App Component is running
    <br/>
    <button onClick={()=>{dispatch(Square());}} >Square</button>
    <input type="text" value={init}/>
    <button onClick={()=>{dispatch(Cube());}} >Cube</button>
  
    </>
  )
}

export default App