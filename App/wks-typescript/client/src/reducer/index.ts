import {combineReducers} from 'redux'
import { usersRducer } from './users'
import { User } from '../actions'

// interface stateI{
//     counter:number;
// }
// const initialState:stateI={
//     counter:1,
// }
// interface actionI{
//     type:string
// }



// const rootReducer=(state:stateI=initialState,action:actionI)=>{
//     return state
// }

// export default rootReducer

interface StoreState{
    users:User[]
}

export const reducers =combineReducers<StoreState>({
    users:usersRducer,
})
