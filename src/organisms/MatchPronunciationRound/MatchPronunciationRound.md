```jsx
const characters = require("../../assets/characters").default;
<MatchPronunciationRound
  indexOfCorrectAnswer={3}
  possibleAnswers={characters.slice(0, 6)}
  reset={() => {alert('Reset')}}
/>
```