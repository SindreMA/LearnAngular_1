import { createReducer, on } from '@ngrx/store';
import { setClasses, setServers } from './actions';

export const initialState = {
    servers: [] as string[],
    classes: [] 
};

type IFFXState = typeof initialState;

export const ffxReducer = createReducer(
  initialState,
  on(setClasses, (state, props) => ({ ...state, classes: props.classes })),
    on(setServers, (state, props) => {
        console.log(props);
        
        return ({ ...state, servers: props.servers })
    })
);