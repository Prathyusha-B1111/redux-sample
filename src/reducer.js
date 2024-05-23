const reducer =( state = {count: 0, history: []}, action) => {
    console.log("action", action)
    const newState = {...state}
    if (action.type === "INCREMENT") {
        newState.count  += action.value
    } else if (action.type === "DECREMENT") {
        return {
            count :newState.count - action.value,
            history: [...state.history, {count: state.count - action.value}]
        }
    }

    return newState
}

export default reducer