import { createStore } from 'redux';
import { State, InitialState } from './types/state';
import { Reducers } from "./reducers";



export const Store = createStore<State>(Reducers, InitialState);