# useDrag()
A hook to make dragging elements easier. ([Try it out](https://codesandbox.io/s/rr28389q1m)).

```js
function App() {
  const dragElement = useRef(null)
  const {isDragging, startX, startY, x, y} = useDrag(dragElement)

  const style = isDragging
    ? {
        position: 'absolute',
        transform: `translate3d(${x - startX}px, ${y - startY}px, 0)`
      }
    : null

  return <DragTarget style={style} ref={dragElement} />
}
```
