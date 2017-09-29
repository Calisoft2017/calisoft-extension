import { combineReducers } from "redux";
import { State } from '../types/state'
import { todos } from './todos'


export const Reducers = combineReducers<State>({
    todos
});