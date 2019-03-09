import {getPointerPosition} from '../utils'

export const initialState = {
    isDragging: false,
}

export default (state, action) => {
    switch (action.type) {
        case 'DRAG_START': {
            const {x, y} = getPointerPosition(action.payload.event)
            return !state.isDragging ? {isDragging: true, startX: x, startY: y, x, y} : state
        }

        case 'DRAG': {
            const {x, y} = getPointerPosition(action.payload.event)
            const positionChanged = x !== state.x || y !== state.y
            return state.isDragging && positionChanged ? {...state, x, y} : state
        }

        case 'DRAG_END':
            return initialState

        default:
            return state
    }
}
