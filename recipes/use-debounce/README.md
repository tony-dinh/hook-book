# useDebounce(value, delay)
A hook for debouncing the updates of a value, only using the trailing update.

```js
function App() {
    const [count, setCount] = useState(0)
    const debouncedCount = useDebounce(count, 1000)
    const onClick = e => setCount(count + 1)

    useEffect(() => {
        console.log(`Value updated to ${debouncedCount}`)
    }, [debouncedCount])

    return (
        <div>
            <button onClick={onClick}>Increment</button>
            <code>currentValue: {debouncedCount}</code>
        </div>
    )
}
```

[![Edit useDebounce](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/88k3oyzv22?fontsize=14)
