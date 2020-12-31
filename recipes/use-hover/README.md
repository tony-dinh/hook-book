
# useHover(ref)
A hook to track hover events on a given element.

```js
function App() {
  const ref = useRef(null);
  const isHovering = useHover(ref);

  return <button ref={ref}>{isHovering}</button>;
}
```

[![Edit useDrag](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usehover-g3tg9)
