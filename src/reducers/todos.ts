import { State, InitialState } from '../types/state'
import { AnyAction } from "redux";

export function todos(state: State = { ...InitialState }, action: AnyAction) {
    switch (action.type) {
        case 'ADD_TODO':
            break;
    }
    return state;
}