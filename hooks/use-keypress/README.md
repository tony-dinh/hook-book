# useKeyPress()
A hook to detect when the specific keys are pressed ([Try it out](https://codesandbox.io/s/8x2068664j)).

```js
function App() {
    const {Control, a} = useKeyPress()

    useEffect(() => {
        if (Control && a) {
            window.alert('Surprise!')
            return
        }
    }, [Control, a])

  return JSON.stringify({ keysPressed }, null, 2)
}
```
