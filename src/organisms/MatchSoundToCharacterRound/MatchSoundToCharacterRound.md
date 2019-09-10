A `MatchSoundToCharacterRound` of `MatchSoundToCharacterGame`. (Psst, the third character is the correct answer.)
```jsx
const possibleAnswers = [
  {
    character: "お",
    isCorrect: false
  },
  {
    character: "ろ",
    isCorrect: false
  },
  {
    character: "よ",
    isCorrect: true
  },
  {
    character: "も",
    isCorrect: false
  },
  {
    character: "ほ",
    isCorrect: false
  },
  {
    character: "の",
    isCorrect: false
  }
];

<MatchSoundToCharacterRound
  possibleAnswers={possibleAnswers}
  reset={() => {alert('reset will be handled by MatchSoundToCharacterGame')}}
/>
```