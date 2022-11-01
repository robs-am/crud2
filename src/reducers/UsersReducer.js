export const UsersInitialState = {
    status: [
        {name: "Mario", email: "abc", fone:"123"},
        {name: "Fernando", email: "zcv", fone:"321"},
        {name: "Jose", email: "hdfg", fone:"567"}
    ]
}

export const UsersReducer = (state, action) => {
    if (action.type === 'CHANGE_USERS') return {...state, status: action.payload.status};
    return state;
}