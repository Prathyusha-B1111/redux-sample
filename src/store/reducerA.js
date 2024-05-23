const reducerA =( state = {countA: 0}, action) => {

    if (action.type === "INCREMENT") {
        return {
            countA: state.countA + action.value
        }
    } 

    return state
}

export default reducerA