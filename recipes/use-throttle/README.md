# useThrottle(value, delay)
A hook for throttling the updates of a value.

```js
function App() {
    const [count, setCount] = useState(0)
    const throttledCount = useThrottle(count, 1000)
    const onClick = e => setCount(count + 1)

    useEffect(() => {
        console.log(`Value updated to ${throttledCount}`)
    }, [throttledCount])

    return (
        <div>
            <button onClick={onClick}>Increment</button>
            <code>currentValue: {throttledCount}</code>
        </div>
    )
}
```

[![Edit useThrottle](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y0z5y13m1x?fontsize=14)
