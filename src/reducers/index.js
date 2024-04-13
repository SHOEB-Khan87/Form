let initState = false;

export const reducer = (state = initState, acion) => {
    switch (acion.type) {
        case "access":
            return state = true
        default:
            return state
    }
}