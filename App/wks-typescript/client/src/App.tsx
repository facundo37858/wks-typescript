
import React, { useEffect, useState ,MouseEvent} from 'react';
import { useDispatch } from 'react-redux';
import { User,fetchUsers,deleteUser } from './actions';

import './App.css';
import { useAppSelector,useAppDispatch } from './hooks';


interface AppProps{
  users:User[],
  fetchUsers():any
}

function App():JSX.Element {

  // let counter=useAppSelector(state=>state.counter)
  

  // const[counters,setCounter]=useState(counter)

  // const counterIncrement=():void=>{
  //   setCounter(counters+1)
  // }
  // const counterDecrement=():void=>{
  //   setCounter(counters-1)

  // }

  let users=useAppSelector(state=>state.users)

  let dispach=useDispatch()


  const getUsers=()=>{
    dispach(fetchUsers())
  }
  const deleteUsers=(event:MouseEvent)=>{
    event.preventDefault()
    dispach(deleteUser((event.target as HTMLInputElement).value))
    console.log((event.target as HTMLInputElement).value)
  }


  return (
    <div>
      Henry Workshop TypeScript

      {/* <div>
        Counter:{counters}
        <div>
          <button onClick={counterIncrement}>Increment</button>
          <button onClick={counterDecrement}>Decrement</button>
        </div>
        

        
      </div> */}
      <div>
        <button onClick={getUsers}>FETCH USERS!!!</button>
      </div>

      
      {users.length>0? users.map(u=><p key={u.id}>{u.name}, {u.lastName} <button value={u.id} onClick={(ev)=>deleteUsers(ev)}>x</button></p>):<p>Not Users</p>}
    </div>
    
  );
}

export default App;
