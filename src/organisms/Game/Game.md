`Game` renders the `FindMatchingCharacter`.
```jsx
const FindMatchingCharacter = require('../FindMatchingCharacter/FindMatchingCharacter').FindMatchingCharacter;

<Game>
  {props => (
    <FindMatchingCharacter {...props}/>
  )}
</Game>
```

`Game` renders the `FindMatchingSound`.
```jsx
const FindMatchingSound = require('../FindMatchingSound/FindMatchingSound').FindMatchingSound;

<Game>
  {props => (
    <FindMatchingSound {...props}/>
  )}
</Game>
```