import { createContext, useReducer } from 'react';
import { UsersInitialState, UsersReducer } from '../reducers/UsersReducer';

const initialState = {
    users: UsersInitialState,
}

export const Context = createContext({
    context: initialState,
    dispatch: () => null
});

const mainReducer = (state, action) => ({
  users: UsersReducer(state.users, action)
});

export const ContextProvider = ({ children }) => {
    const [ context, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ context, dispatch }}>
            {children}
        </Context.Provider>
    );
}