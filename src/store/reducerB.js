const reducerB =( state = {countA: 0, history: []}, action) => {

    if (action.type === "DECREMENT") {
        return {
            countA :state.countA - action.value,
            history: [...state.history, {countA: state.countA - action.value}]
        }
    } 

    return state
}

export default reducerB