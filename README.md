# 👨‍🍳 HookBook
[![npm version](https://img.shields.io/npm/v/hook-book.svg)](https://www.npmjs.com/package/hook-book)
[![npm downloads](https://img.shields.io/npm/dt/hook-book.svg)](https://www.npmjs.com/package/hook-book)
[![npm downloads](https://img.shields.io/npm/dm/hook-book.svg)](https://www.npmjs.com/package/hook-book)

A collection of [React Hook](https://reactjs.org/docs/hooks-intro.html) recipes.

## Recipes
| Recipe                                | Description                                                                   |
|---------------------------------------|-------------------------------------------------------------------------------|
| [useDebounce](./recipes/use-debounce) | A hook for debouncing the updates of a value, only using the trailing update. |
| [useDrag](./recipes/use-drag)         | A hook to make dragging elements easier.                                      |
| [useKeypress](./recipes/use-keypress) | A hook to detect when the specific keys are pressed.                          |
| [useThrottle](./recipes/use-throttle) | A hook for throttling the updates of a value.

## Installation
HookBook is supported in projects that are using the latest versions of React (16.8.0+). To install, run the following command from your CLI.
```bash
$ npm install hook-book
```

## Sample Usage
```jsx
import useKeyPress from 'hook-book/use-keypress'

const Component = () => {
    const keysPressed = useKeyPress()
    return (...)
}
```
