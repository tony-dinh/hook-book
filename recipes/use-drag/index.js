import {useEffect, useReducer} from 'react'
import reducer, {initialState} from './reducer'
import {bulkAddEventListener, bulkRemoveEventListener} from '../utils'

const DRAG_START_EVENTS = ['mousedown', 'touchstart']
const DRAG_EVENTS = ['mousemove', 'touchmove']
const DRAG_END_EVENTS = ['mouseup', 'touchcancel', 'touchend']

export default function useDrag(ref) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {isDragging} = state

    const onDragStart = event => dispatch({type: 'DRAG_START', payload: {event}})
    const onDrag = event => dispatch({type: 'DRAG', payload: {event}})
    const onDragEnd = event => dispatch({type: 'DRAG_END', payload: {event}})

    useEffect(() => {
        // Listen for events indicating that dragging has begun
        bulkAddEventListener(ref.current, DRAG_START_EVENTS, onDragStart)
        return () => bulkRemoveEventListener(ref.current, DRAG_START_EVENTS, onDragStart)
    }, [ref.current])

    useEffect(() => {
        // Only need to listen for drag and drag end events when dragging has started
        if (isDragging) {
            bulkAddEventListener(window, DRAG_EVENTS, onDrag)
            bulkAddEventListener(window, DRAG_END_EVENTS, onDragEnd)
            window.addEventListener('blur', onDragEnd)
        } else {
            bulkRemoveEventListener(window, DRAG_EVENTS, onDrag)
            bulkRemoveEventListener(window, DRAG_END_EVENTS, onDragEnd)
            window.removeEventListener('blur', onDragEnd)
        }

        return () => {
            bulkRemoveEventListener(window, DRAG_EVENTS, onDrag)
            bulkRemoveEventListener(window, DRAG_END_EVENTS, onDragEnd)
            window.removeEventListener('blur', onDragEnd)
        }
    }, [isDragging])

    return state
}
