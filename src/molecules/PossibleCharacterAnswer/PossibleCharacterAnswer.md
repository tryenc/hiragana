A `PossibleCharacterAnswer` with a correct `value`
```jsx
const helpers = require('../../js/helpers');
const CorrectExample = () => {
  const [guessed, _setGuessed] = React.useState([])
  const setGuessed = value => {
    _setGuessed([value, ...guessed])
  }

  const value = "あ"
  const correctAnswer = "あ"

  return (
    <PossibleCharacterAnswer
      isCorrect={helpers.computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}

<CorrectExample />
```

A `PossibleCharacterAnswer` with an incorrect `value`
```jsx
const helpers = require('../../js/helpers');
const IncorrectExample = () => {
  const [guessed, _setGuessed] = React.useState([])
  const setGuessed = value => {
    _setGuessed([value, ...guessed])
  }

  const value = "と"
  const correctAnswer = "あ"

  return (
    <PossibleCharacterAnswer
      isCorrect={helpers.computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}

<IncorrectExample />
```