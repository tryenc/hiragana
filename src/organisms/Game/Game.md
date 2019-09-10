`Game` renders the `FindMatchingCharacter`.
```jsx
const FindMatchingCharacter = require('../FindMatchingCharacter/FindMatchingCharacter').FindMatchingCharacter;

<Game>
  {(possibleAnswers, reset) => (
    <FindMatchingCharacter possibleAnswers={possibleAnswers} reset={reset}/>
  )}
</Game>
```

`Game` renders the `FindMatchingSound`.
```jsx
const FindMatchingSound = require('../FindMatchingSound/FindMatchingSound').FindMatchingSound;

<Game>
  {(possibleAnswers, reset) => (
    <FindMatchingSound possibleAnswers={possibleAnswers} reset={reset}/>
  )}
</Game>
```