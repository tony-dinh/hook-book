export const initialState = {}

export default (state, action) => {
    switch (action.type) {
        case 'KEY_DOWN':
            return !state[action.key] ? {...state, [action.key]: true} : state

        case 'KEY_UP': {
            const {[action.key]: isKeyPressed, ...newState} = state
            return isKeyPressed ? newState : state
        }

        case 'RESET':
            return initialState

        default:
            return state
    }
}
