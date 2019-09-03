```jsx
<Button>A Button</Button>
```

A `Button` with an `onClick` handler.
```jsx
<Button onClick={() => {alert('Clicked')}}>Click</Button>
```

A `Button` with an `onDoubleClick` handler.
```jsx
<Button onDoubleClick={() => {alert('Double Clicked')}}>Double Click</Button>
```

A `Button` with an `onClick` handler and an `onDoubleClick` handler. Note that double-clicking
does not result in the `onClick` handler being called twice.
```jsx
<Button onClick={() => {alert('Clicked')}} onDoubleClick={() => {alert('Double Clicked')}}>Single or Double Click</Button>
```