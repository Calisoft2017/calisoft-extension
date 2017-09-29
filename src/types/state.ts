import { Todo } from "./todo";

export class State {
    todos: Todo[]
}

export const InitialState: State = {
    todos: [{
        text: 'dO hOME',
        completed: false
    }]
}