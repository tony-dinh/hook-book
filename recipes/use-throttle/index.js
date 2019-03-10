import {useRef, useEffect, useState} from 'react'

export default function useThrottle(value, delay) {
    const [throttledValue, setThrottledValue] = useState(value)
    // Use queue & timeout to power the update loop.
    const queue = useRef(null)
    const timeout = useRef(null)

    // Clear the timeout on component unmount.
    useEffect(() => () => clearTimeout(timeout.current), [])

    useEffect(() => {
        // Avoid triggering the update loop on the component mount lifecycle.
        // Use the absence of the queue reference to indentify this case.
        if (!queue.current) {
            queue.current = []
            return
        }

        const updateValue = () => {
            if (!queue.current.length) {
                timeout.current = clearTimeout(timeout.current)
                return
            }

            setThrottledValue(queue.current.shift())
            timeout.current = setTimeout(updateValue, delay)
        }

        // Add every value change to the update
        queue.current.push(value)

        // If there is currently a change queued to occur, we do nothing.
        // Otherwise, trigger the update loop by setting the timeout.
        timeout.current = timeout.current || setTimeout(updateValue, 0)
    }, [value])

  return throttledValue
}
