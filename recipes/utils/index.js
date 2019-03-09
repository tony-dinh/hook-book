export const bulkAddEventListener = (object, events = [], callback) => {
    if (!object) {
        return
    }

    events.forEach((event) => {
        object.addEventListener(event, callback)
    })
}

export const bulkRemoveEventListener = (object, events = [], callback) => {
    if (!object) {
        return
    }

    events.forEach((event) => {
        object.removeEventListener(event, callback)
    })
}

export const getMousePosition = (e) => {
    return {
        x: e.pageX - (window.scrollX || window.pageXOffset),
        y: e.pageY - (window.scrollY || window.pageYOffset)
    }
}

export const getTouchPosition = (e) => {
    return {
        x: e.touches[0].pageX - (window.scrollX || window.pageXOffset),
        y: e.touches[0].pageY - (window.scrollY || window.pageYOffset)
    }
}

export const getPointerPosition = (e) => {
    return e.touches
        ? getTouchPosition(e)
        : getMousePosition(e)
}
