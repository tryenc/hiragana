An example of `Round` set up to match the character based on the pronunciation.
```jsx
const {
  possibleAnswers,
  PossibleCharacterAnswer,
  PronunciationToMatch
} = require('./demoDependencies');

<Round
  possibleAnswers={possibleAnswers}
  renderTileToMatch={({ character, handleClick }) => (
    <PronunciationToMatch
      character={character}
      handleClick={handleClick}
    />
  )}
  renderPossibleTileAnswer={({ character, handleGuess, wasCorrectlyGuessed }) => (
    <PossibleCharacterAnswer
      character={character}
      handleClick={handleGuess}
      wasCorrectlyGuessed={wasCorrectlyGuessed}
    />
  )}
  reset={() => alert('reset is handled by parent component')}
/>
```

An example of `Round` set up to match the pronunciation based on the character.
```jsx
const {
  possibleAnswers,
  PossiblePronunciationAnswer,
  CharacterToMatch
} = require('./demoDependencies');

<Round
  possibleAnswers={possibleAnswers}
  renderTileToMatch={({ character, handleClick }) => (
    <CharacterToMatch
      character={character}
    />
  )}
  renderPossibleTileAnswer={({ character, handleGuess, playPronunciation, wasCorrectlyGuessed }) => (
    <PossiblePronunciationAnswer
      character={character}
      handleClick={playPronunciation}
      handleDoubleClick={handleGuess}
      wasCorrectlyGuessed={wasCorrectlyGuessed}
    />
  )}
  reset={() => alert('reset is handled by parent component')}
/>
```
