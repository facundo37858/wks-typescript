import { User,fetchUsers, FetchUsersAction, DeleteUsuerAction } from "../actions";
import { ActionTypes } from "../actions/types";
import { Action } from "../actions/typesAction";

export const usersRducer=(state:User[]=[], action:Action)=>{
    switch(action.type){
        case ActionTypes.fetchUsers:
            return action.payload
        case ActionTypes.deleteUsers:
            return state.filter(u=>u.id!=action.payload)
            
        default:
            return state
    }

}