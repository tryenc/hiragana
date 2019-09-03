```jsx
<TileButton>A button that looks like a Tile</TileButton>
```

A `TileButton` with an `onClick` handler and an `onDoubleClick` handler. Note that double-clicking
does not result in the `onClick` handler being called twice.
```jsx
<TileButton onClick={() => {alert('Clicked')}} onDoubleClick={() => {alert('Double Clicked')}}>Single or Double Click</TileButton>
```