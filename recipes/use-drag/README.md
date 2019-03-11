# useDrag(ref)
A hook to make dragging elements easier.

```js
function App() {
  const dragElement = useRef(null)
  const {isDragging, startX, startY, x, y} = useDrag(dragElement)

  const style = isDragging
    ? {
        position: 'absolute',
        transform: `translate3d(${x - startX}px, ${y - startY}px, 0)`
      }
    : { transition: 'transform 250ms' }

  return <DragTarget style={style} ref={dragElement} />
}
```

[![Edit useDrag](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rr28389q1m?fontsize=14)
