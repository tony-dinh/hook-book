# useKeyPress()
A hook to detect when the specific keys are pressed.

```js
function App() {
    const {Control, a, A} = useKeyPress()

    useEffect(() => {
        if (Control && (a || A)) {
            window.alert('Surprise!')
            return
        }
    }, [Control, a, A])

  return JSON.stringify({ keysPressed }, null, 2)
}
```

[![Edit useKeyPress](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8x2068664j?fontsize=14)
