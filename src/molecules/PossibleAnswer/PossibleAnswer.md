A `PossibleAnswer` with an incorrect `value`
```jsx
const useState = require('react').useState
const [guessed, _setGuessed] = useState([]);
function setGuessed(e) {
  _setGuessed([e.target.value, ...guessed])
}

<PossibleAnswer correctAnswer="A" guessed={guessed} setGuessed={setGuessed} value="B"/>
```

A `PossibleAnswer` with a correct `value`
```jsx
const useState = require('react').useState
const [guessed, _setGuessed] = useState([]);
function setGuessed(e) {
  _setGuessed([e.target.value, ...guessed])
}

<PossibleAnswer correctAnswer="A" guessed={guessed} setGuessed={setGuessed} value="A"/>
```