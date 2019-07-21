import {useEffect, useReducer} from 'react'
import reducer, {initialState} from './reducer'

export default function useKeyPress() {
    // Use the useReducer hook instead of useState, since the resulting states
    // depend on the previous.
    const [keyPressed, dispatch] = useReducer(reducer, initialState)

    const onKeyDown = event => dispatch({type: 'KEY_DOWN', key: event.key})
    const onKeyUp = event => dispatch({type: 'KEY_UP', key: event.key})
    // Need to reset active keys when the window loses focus, otherwise the keyup
    // event never fires & remain 'active' when the window regains focus
    const onBlur = () => dispatch({type: 'RESET'})

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        document.addEventListener('keyup', onKeyUp)
        window.addEventListener('blur', onBlur)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.removeEventListener('keyup', onKeyUp)
            window.removeEventListener('blur', onBlur)
        }
    }, [])

    return keyPressed
}
